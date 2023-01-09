import { useEffect, useState } from "react"
import Avatar from "../../components/Avatar"
import ChainPill from "../../components/ChainPill"
import Tile from "../../components/Tile"

import { providers, utils } from "ethers"
import { useRouter } from 'next/router'

import TagButton from '../../components/TagButton'
import Link from "next/link"

import LastActivity from "../../components/wallet/overview/activity"
import Wallet from "../../components/wallet/overview/wallet"

const sample_pills = [
  { name: 'Ethereum' },
  { name: 'Polygon' },
  { name: 'Optimism' },
]

const sample_assets = [
  { asset: 'ETH', quantity: 23.546 },
  { asset: 'MATIC', quantity: 5400 }
]

const provider: any = providers.getDefaultProvider('homestead', {
  alchemy: process.env.NEXT_PUBLIC_ALCHEMY_KEY
})

const activity = Array.from({ length: 30 }, () => {
  return {
    defi: Math.random() * 100,
    nft: Math.random() * 100,
    erc20: Math.random() * 100
  }
})

export default function WalletDetailPage ()  {
  const [tags, setTags] = useState([])
  const router = useRouter()

  const address = router.query.id
  console.log(`Got id:`, address)

  return (
    <div className="container mx-auto">
      <div className="flex my-10">
        <div className="flex-1 flex flex-row">
          <Avatar />
          <div className="ml-6">
            <h2 className="text-white text-3xl font-bold mb-4">mercvry.eth</h2>
            <span className="block text-white text-sm font-mono mb-2">{ address?.substring(0, 6) }...{ address?.slice(-4) }</span>
            <span className="block text-white/70 text-sm">Active since 2y</span>

            <span className="block">
              <a href="https://lensfrens.xyz/mercvry.lens" className="text-hedgen-100 hover:underline text-sm">mercvry.lens</a>
            </span>

            {/* Tags */}
            <div className="mt-6">
              <TagButton />
            </div>

          </div>
        </div>
        <div className="flex-1 pl-12 ml-24">
          <Tile title="Net worth">
            <span className="text-3xl text-white font-bold my-2 block">$42,546</span>
            <div className="block">
              <span className="text-[#1C8E51] font-mono text-sm">+24.5% (+$834.23)</span>
            </div>
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

      <nav className="w-full border-b border-hedgen-200/30 py-4 text-white text-sm font-bold">
            <Link href="#" className="text-hedgen-100">Overview</Link>
            <Link href="#" className="ml-6 text-white/70">DeFi</Link>
            <Link href="#" className="ml-6 text-white/70">NFT</Link>
            <Link href="#" className="ml-6 text-white/70">Activity</Link>
      </nav>

      <div>
        <Tile title="Last activity" className="mt-6">
          <LastActivity data={activity} address={address} />
        </Tile>
      </div>

      <div className="flex">
        <div className="w-2/3 pr-4">
          
          <Tile title="Wallet" className="mt-10">
              <Wallet data={sample_assets} address={address} />
          </Tile>

          <Tile title="Transaction history" className="mt-10"></Tile>

        </div>
        <div className="w-1/3 pl-10">
          
          <Tile title="Wallet repartition" className="mt-10"></Tile>
          <Tile title="ENS Domains" className="mt-10"></Tile>
          <Tile title="DAO membership" className="mt-10"></Tile>

        </div>
      </div>

    </div>
  )
}
