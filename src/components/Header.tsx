import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
	return (
		<>
			<Head>
				<title>DIVA ViZ | Diva Protocol</title>
				<meta name="description" content="DIVA Viz" />
				<link rel="icon" href="./favicon.svg" />
			</Head>
			<div className="pt-10 px-16 text-white flex justify-between items-center">
				<Link href={'/'}>
					<div className=" text-4xl font-bold font-body">
						<div>
							<img src="./DIVA-Viz-logo.svg" alt="logo" />
						</div>
					</div>
				</Link>
				<div className="flex gap-8 items-center">
					<div className="text-base cursor-pointer opacity-70">
						<Link href="/faq">FAQ</Link>
					</div>
					<ConnectButton />
				</div>
			</div>
		</>
	)
}

export default Header
