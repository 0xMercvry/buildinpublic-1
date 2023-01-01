import Image from "next/image"
import type { ReactElement } from "react"

export default function ChainPill ({ name, logo, className }: any) {
    return (
        <div className={`font-mono text-xs bg-[#D9d9d9]/10 text-white flex px-4 py-2 rounded-full hover:bg-[#d9d9d9]/20 cursor-pointer transition ${className}`}>
            { logo && <Image src={logo} width={21} height={21} /> }
            <span>{ name }</span>
        </div>
    )
}