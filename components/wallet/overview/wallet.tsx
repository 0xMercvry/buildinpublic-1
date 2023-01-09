
import { providers, utils } from "ethers"
import { useEffect, useState } from "react"

function Item ({ asset, value }) {
    return (
        <div className="border-t border-hedgen-700 py-2">
            <div className="block flex justify-between text-white">
                <span>{ asset }</span>
                <span>{ `10,800` }</span>
            </div>
            <div className="block flex justify-between font-mono text-xs text-white/50">
                <span>{ `$1,243.43` }</span>
                <span>{ value?.toFixed(4) }</span>
            </div>
        </div>
    )
}

export default function Wallet ({ address }: any) {
    const [assets, setAssets] = useState([])

    const loadWallet = async () => {
        try {
            const provider: any = providers.getDefaultProvider('homestead', {
                alchemy: process.env.NEXT_PUBLIC_ALCHEMY_KEY
            })
            
            console.log(`Getting assets`)
            const d = await provider.getBalance(address)
            console.log(`Got balance: ${d}`)
            assets.push({ asset: 'ETH', value: utils.formatEther(d) })
            setAssets(assets)
        } catch (err) {
            console.log(err)
        }
        //
    }

    useEffect(() => {
        loadWallet()
    }, [])

    return (
        <div className="text-sm mt-3">
            { assets.map((item, k) => <Item key={k} {...item} />) }
        </div>
    )
}