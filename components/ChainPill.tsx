import Image from "next/image"
import type { ReactElement } from "react"

export default function ChainPill ({ name, className }: any) {
    return (
        <div className={`font-mono text-xs text-white/50 bg-[#D9d9d9]/10 text-white flex items-center pr-4 py-1.5 rounded-full hover:bg-[#d9d9d9]/20 hover:text-white/80 cursor-pointer transition ${className}`}>
            <Image src={`/chains/${name.toLowerCase()}.png`} width={21} height={21} className="mx-2" />
            <span>{ name }</span>
        </div>
    )
}