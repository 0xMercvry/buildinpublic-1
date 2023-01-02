

import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react"


export default function SearchBar () {
    const [hasFocus, setHasFocus] = useState(false)
    const [search, setSearch] = useState(null)

    const router = useRouter()
    const searchRef = useRef(null)

    const handleEvent = (e) => {
        if (e.key === '/') {
            searchRef?.current.focus()
            return ;
        }
        console.log(`Got key:${e.key}.`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push({
            pathname: `/wallet/${searchRef.current.value}`
        })
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEvent, true)
    })

    return (
        <div className={`bg-white/10 rounded-full w-1/2 my-1 pl-3 flex transition items-center border-2 ${hasFocus ? 'border-hedgen-200/30': 'border-transparent'}`}>
            <Image src={`/search.svg`} width={24} height={24} />
            <form onSubmit={handleSubmit} className="flex-1">
                <input
                    type="search"
                    ref={searchRef}
                    name="search"
                    placeholder="Search for an account or ENS domain, ..."
                    className="w-full py-2 bg-transparent ml-2 text-sm outline-none placeholder-hedgen-200/50"
                    onFocus={_ => setHasFocus(true)}
                    onBlur={_ => setHasFocus(false)}
                />
            </form>
            <span className="h-8 w-8 my-1 mr-2 bg-hedgen-200/20 rounded-full text-center flex items-center justify-center text-sm">
                <span className="text-hedgen-200">/</span>
            </span>
        </div>
    )
}