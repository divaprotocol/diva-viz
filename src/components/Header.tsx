import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'

const Header = () => {
	return (
		<>
			<Head>
				<title>DIVA ViZ | Diva Protocol</title>
				<meta name="description" content="DIVA Viz" />
				<link rel="icon" href="./favicon.svg" />
			</Head>
			<motion.nav
				variants={navVariants}
				initial="hidden"
				whileInView="show"
				viewport={{
					once: true,
				}}>
				<div className="pt-10 px-16 text-white flex justify-between items-center">
					<Link href={'/'}>
						<div className=" text-4xl font-bold font-body">
							<div>
								<img src="./DIVA-Viz-logo.svg" alt="logo" />
							</div>
						</div>
					</Link>
					<div className="text-base cursor-pointer opacity-70">
						<Link href="/faq">FAQ</Link>
					</div>
				</div>
			</motion.nav>
		</>
	)
}

export default Header
