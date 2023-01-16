import React, { useState, Fragment } from 'react'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	Typography,
} from '@material-tailwind/react'

const FAQ_ITEMS_DATA = [
	{
		title: 'What is DIVA Protocol?',
		body: (
			<>
				DIVA Protocol is a smart contract that allows its users to create and
				settle fully customizable event-driven products also known as
				derivatives. It is the operation system for all kinds of derivative
				applications including insurance, prediction markets, structured
				products as well as event-driven conditional donations. Users can choose
				any public data feed as the underlying (e.g., the price of an asset or a
				basket of assets, the TVL locked in DeFi, Ethereum gas price, Bitcoin
				hash rate, the average temperature, etc.) and combine it with a wide
				range of possible payoff profiles (binary, linear, convex, or concave)
				to create truly unique products that do not yet exist in DeFi and the
				traditional financial world.
			</>
		),
	},
	{
		title: 'How can I use DIVA Protocol?',
		body: (
			<>
				Head over to the
				<a
					href="https://www.divaprotocol.io/dapps"
					className="underline mx-1"
					target={'_blank'}>
					dApps
				</a>
				page to find all the applications that have been built on top of DIVA
				Protocol. They allow you to create bets, insurances, structured products
				and conditional donations on virtually anything and share it with
				anyone.
			</>
		),
	},
	{
		title: 'What can I build using DIVA Protocol?',
		body: (
			<>
				DIVA Protocol is a decentralized and permissionless piece of
				infrastructure that allows its users to create and settle fully
				customizable event-driven products also known as derivatives. Users can
				choose any public data feed as the underlying (e.g., the price of an
				asset or a basket of assets, the TVL locked in DeFi, Ethereum gas price,
				Bitcoin hash rate, the average temperature, etc.) and combine it with a
				wide range of possible payoff profiles (binary, linear, convex, or
				concave) to create truly unique products that do not yet exist in DeFi
				and the traditional financial world.
			</>
		),
	},
	{
		title: 'What are the utilities of DIVA Token?',
		body: (
			<>
				DIVA is the native token that is used to govern the DIVA Protocol. There
				will be a maximum of 100m tokens in circulation. The tokenomics were
				designed to be simple and at the same time flexible enough to adapt to
				the various stages of the protocol lifecycle as well as constantly
				changing market conditions. Holding DIVA tokens allows users to vote
				protocol parameters such as fees as well as on how to spend the DIVA
				treasury funds. Latter may include voting on grants, fee rebates, token
				buyback programs etc.
			</>
		),
	},
]

const FAQItem = ({ title, body, isOpen, onClick }) => (
	<Accordion
		open={isOpen}
		className="bg-gradient-to-r from-[#303030] to-[#1B1B1B] border-none rounded-2xl px-5 py-2 my-10 z-10 font-text">
		<AccordionHeader
			onClick={onClick}
			className="border-none text-white text-3xl hover:text-white">
			{title}
		</AccordionHeader>
		<AccordionBody className="text-[#A4A4A4] text-xl">{body}</AccordionBody>
	</Accordion>
)

const FAQSection = () => {
	const [open, setOpen] = useState(Array(FAQ_ITEMS_DATA.length).fill(false))

	const handleOpen = (value) => {
		setOpen(open.map((item, index) => (index === value ? !item : item)))
	}

	return (
		<Fragment>
			<div className="flex flex-col items-center justify-center">
				<div className="w-[60%] mt-16 font-text">
					<Typography
						variant="h1"
						className="text-white text-center mt-9 font-text">
						Frequently Asked Questions
					</Typography>

					{FAQ_ITEMS_DATA.map((item, index) => (
						<FAQItem
							key={index}
							isOpen={open[index]}
							onClick={() => handleOpen(index)}
							title={item.title}
							body={item.body}
						/>
					))}
				</div>
			</div>
		</Fragment>
	)
}

export default FAQSection
