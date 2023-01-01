import { useEffect } from "react"
import Tile from "../components/Tile"
import { useWeb3Context } from "../contexts/Web3"
import { useWeb3 } from "../hooks/Web3"


export default function HomePage ()  {
  const { address } = useWeb3Context()

  return (
    <div className="container mx-auto">
      <div className="flex my-10">
        <div className="flex-1">

        </div>
        <div className="flex-1 pl-12 ml-24">
          <Tile title="Net worth">
            42,454€
          </Tile>
        </div>
      </div>
      <span className="text-white text-sm font-mono">Addresss: { address }</span>
    </div>
  )
}
