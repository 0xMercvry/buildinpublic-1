

import Image from "next/image"
import { useState } from "react"


export default function SearchBar () {
    const [hasFocus, setHasFocus] = useState(false)

    return (
        <div className={`bg-white/10 rounded-full w-1/2 my-1 pl-3 flex transition border-2 ${hasFocus ? 'border-hedgen-200/30': 'border-transparent'}`}>
            <Image src={`./search.svg`} width={24} height={24} />
            <input
                type="search"
                placeholder="Search for an account or ENS domain, ..."
                className="flex-1 py-2 bg-transparent ml-2 text-sm outline-none placeholder-hedgen-200/50"
                onFocus={_ => setHasFocus(true)}
                onBlur={_ => setHasFocus(false)}
            />
            {/* <span className="h-8 w-8 my-1 mr-2 bg-hedgen-200/20 rounded-full text-center">
                <span className="text-hedgen-200">/</span>
            </span> */}
        </div>
    )
}