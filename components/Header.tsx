
import Image from "next/image"
import Link from "next/link"

import SearchBar from "./Search"
import NavLink from "./NavLink"

export default function Header () {
    return (
        <header className="bg-hedgen-900/70 border-b border-hedgen-200/30 py-2 sticky top-0 z-30 w-full shadow-lg backdrop-blur-md">
            <div className="container mx-auto top-0 text-white flex flex-row justify-between items-center">
                <Link href={`/`} title={`Home`}>
                    <Image src={`./hedgen.svg`} width={111} height={50} alt={`logo`} />
                </Link>
                <SearchBar />
                <nav className="font-bold text-sm">
                    <NavLink href={`/wallet`} active={true}>Wallet</NavLink>
                    <NavLink href={`/defi`}>DeFi</NavLink>
                    <NavLink href={`/nft`}>NFT</NavLink>
                    <NavLink href={`/`} primary={true}>Sign In</NavLink>
                </nav>
            </div>
        </header>
    )
}