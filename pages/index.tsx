import { useEffect } from "react"
import { useWeb3Context } from "../contexts/Web3"
import { useWeb3 } from "../hooks/Web3"


export default function HomePage ()  {
  const { address } = useWeb3Context()

  useEffect(() => {
    console.log(`Got new address triggered: ${address}`)
  }, [address])

  return (
    <div className="h-screen w-full bg-[#000F11] justify-center">
      <h1 className="text-3xl font-semibold text-center text-white">Hello there!</h1>
      <span className="text-white text-sm font-mono">Addresss: { address }</span>
    </div>
  )
}
