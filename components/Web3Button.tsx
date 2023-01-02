
import Link from 'next/link'
import React from 'react'
import { useWeb3Context } from '../contexts/Web3'
import { useWeb3 } from '../hooks/Web3'

function CustomButton (props: any) {
    return (
        <button
            {...props}
            className={`bg-hedgen-200 text-hedgen-600 py-2 px-4 rounded-full ml-4`}
        >
            { props.children }
        </button>
    )
}

export function Web3Button () {
    const { web3Provider, connect, disconnect, address } = useWeb3Context()

    console.log(web3Provider)
    
    return web3Provider
        ? <Link href={`/wallet/${address}`}>Account</Link>
        : <CustomButton onClick={connect}>Sign In</CustomButton>
}