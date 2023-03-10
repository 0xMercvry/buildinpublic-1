import { useEffect, useReducer, useCallback } from "react"
import { ethers } from "ethers"

import {
    Web3ProviderState,
    Web3Action,
    web3InitialState,
    web3Reducer
} from '../reducers/Web3Provider'

import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
    walletConnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.NEXT_PUBLIC_INFURA_ID
        }
    }
}

let web3Modal: Web3Modal | null
if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
    })
}

type Web3Client = Web3ProviderState & {
    connect: () => Promise<void>,
    disconnect: () => Promise<void>
}

export const useWeb3 = () => {
    const [state, dispatch] = useReducer(web3Reducer, web3InitialState)
    const { provider, web3Provider, address, network } = state

    const connect = useCallback(async () => {
        if (web3Modal) {
            try {
                const provider = await web3Modal.connect()
                const web3Provider = new ethers.providers.Web3Provider(provider)
                const signer = web3Provider.getSigner()
                const address = await signer.getAddress()
                const network = await web3Provider.getNetwork()

                dispatch({
                    type: 'SET_WEB3_PROVIDER',
                    provider,
                    web3Provider,
                    address,
                    network
                } as Web3Action)

            } catch (e) {
                console.log(`connect error: `, e)
            }
        } else {
            console.log(`No web3 modal`)
        }
    }, [])

    const disconnect = useCallback(async () => {
        if (web3Modal) {
            web3Modal.clearCachedProvider()
            if (provider?.disconnect && typeof provider.disconnect === 'function') {
                await provider.disconnect()
            }
            dispatch({
                type: 'RESET_WEB3_PROVIDER'
            } as Web3Action)
        } else {
            console.log(`No web3modal`)
        }
    }, [provider])

    useEffect(() => {
        if (web3Modal && web3Modal.cachedProvider) {
            connect()
        }
    }, [connect])

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts: string[]) => {
                dispatch({
                    type: 'SET_ADDRESS',
                    address: accounts[0]
                } as Web3Action)
            }

            const handleChainChanged = (_hexChainId: string) => {
                if (typeof window !== 'undefined') {
                    console.log(`switched to chain... ${_hexChainId}`)
                    window.location.reload()
                } else {
                    console.log(`window is undefined`)
                }
            }

            const handleDisconnect = (error: { code: number, message: string }) => {
                console.log(`disconnect:`, error)
                disconnect()
            }

            provider.on('accountsChanged', handleAccountsChanged)
            provider.on('chainChanged', handleChainChanged)
            provider.on('disconnect', handleDisconnect)

            return () => {
                if (provider.removeListener) {
                    provider.removeListener('accountsChanged', handleAccountsChanged)
                    provider.removeListener('chainChanged', handleChainChanged)
                    provider.removeListener('disconnect', handleDisconnect)
                }
            }
        }
    }, [provider, disconnect])

    return {
        provider,
        web3Provider,
        address,
        network,
        connect,
        disconnect
    } as Web3Client
}
