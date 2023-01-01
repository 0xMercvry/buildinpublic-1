
import Link from "next/link"
import type { LinkProps } from "next/link"

type NavLinkProps = LinkProps & {
    children?: React.ReactElement | string,
    primary?: boolean,
    active?: boolean
}

export default function NavLink (props: NavLinkProps) {
    const style = props.primary
        ? `bg-hedgen-200 text-hedgen-600 py-2 px-4 rounded-full ml-4`
        : `text-hedgen-600 px-2 mx-2 transition hover:text-hedgen-200 ${props.active && `text-hedgen-100`}`

    return (
        <Link {...props} className={style} />
    )
}