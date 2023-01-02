
import Image from "next/image"
import Link from "next/link"

import SearchBar from "./Search"
import NavLink from "./NavLink"

import { Web3Button } from "./Web3Button"
import { useRouter } from "next/router"

const navigation = [
    { name: 'Wallet' },
    { name: 'DeFi' },
    { name: 'NFT' },
]

export default function Header () {
    const router = useRouter()

    console.log(router.pathname)
    console.log(`Match: ${router.pathname.includes('/wallet')}`)

    return (
        <header className="bg-hedgen-900/70 border-b border-hedgen-200/30 py-2 sticky top-0 z-30 w-full shadow-lg backdrop-blur-md">
            <div className="container mx-auto top-0 text-white flex flex-row justify-between items-center">
                <Link href={`/`} title={`Home`}>
                    <Image src={`/hedgen.svg`} width={111} height={50} alt={`logo`} />
                </Link>
                <SearchBar />
                <nav className="font-bold text-sm">
                    { navigation.map((nav, k) => {
                        const uri = `/${nav.name.toLowerCase()}`
                        return (
                            <NavLink
                                href={uri}
                                key={k}
                                active={router.pathname.includes(uri)}>
                                    { nav.name }
                            </NavLink>
                        )
                    })}
                    <Web3Button />
                </nav>
            </div>
        </header>
    )
}