
import Image from "next/image"

export default function Header () {
    return (
        <header className="bg-hedgen-900">
            <div className="container mx-auto top-0 text-white">
                <span className="font-bold">
                    <Image src={`./hedgen.svg`} width={111} height={50} />
                </span>
            </div>
        </header>
    )
}