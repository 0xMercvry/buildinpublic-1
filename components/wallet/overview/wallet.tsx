

function Item ({ asset, quantity, currentPrice }) {
    return (
        <div className="border-t border-hedgen-700 py-2">
            <div className="block flex justify-between text-white">
                <span>{ asset }</span>
                <span>{ `10,800` }</span>
            </div>
            <div className="block flex justify-between font-mono text-xs text-white/50">
                <span>{ `$1,243.43` }</span>
                <span>{ quantity }</span>
            </div>
        </div>
    )
}

export default function Wallet ({ data }: any) {
    return (
        <div className="text-sm mt-3">
            { data.map((item, k) => <Item key={k} {...item} />) }
        </div>
    )
}