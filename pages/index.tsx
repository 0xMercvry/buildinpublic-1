import { useEffect } from "react"
import ChainPill from "../components/ChainPill"
import Tile from "../components/Tile"
import { useWeb3Context } from "../contexts/Web3"
import { useWeb3 } from "../hooks/Web3"

const sample_pills = [
  { name: 'Ethereum' },
  { name: 'Arbitrum' },
  { name: 'Optimism' },
]

export default function HomePage ()  {
  const { address } = useWeb3Context()

  return (
    <div className="container mx-auto">
      <div className="flex my-10">
        <div className="flex-1">

        </div>
        <div className="flex-1 pl-12 ml-24">
          <Tile title="Net worth">
            <span className="text-3xl text-white font-bold">$42,546</span>
          </Tile>
          <div className="flex flex-row mt-4">
            { sample_pills.map((pill, k) => (
              <ChainPill
                name={pill.name}
                key={k} className="mr-2" />
              ))
            }
          </div>
        </div>
      </div>
      <span className="text-white text-sm font-mono">Addresss: { address }</span>
    </div>
  )
}
