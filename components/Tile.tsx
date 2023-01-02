import { ReactElement } from "react"

interface TileProps {
    children?: ReactElement | string | null | undefined,
    title?: string | null | undefined,
    className?: string | null | undefined
}

export default function Tile ({ children, title, className } : TileProps) {
    return (
        <div className={`bg-[#d9d9d9]/10 rounded-lg py-4 px-6 ${className}`}>
            <h3 className="text-white/70 text-lg font-semibold">{ title }</h3>
            { children }
        </div>
    )
}