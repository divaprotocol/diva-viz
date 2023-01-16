import React, { useState, Fragment } from 'react'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	Typography,
} from '@material-tailwind/react'

const FAQ_ITEMS_DATA = [
	{
		title: 'What is DIVA ViZ?',
		body: (
			<>
				DIVA ViZ is an application that allows you to visually represent derivative 
				product offers created using the<a
					href="https://app.diva.finance/"
					className="underline mx-1"
					target={'_blank'}>
					DIVA App
				</a>. By using DIVA ViZ, you can enhance 
				the presentation of your product offers by attaching an attractive illustration 
				when sharing the link via email, chat, or social media with potential counterparties.
			</>
		),
	},
	{
		title: 'What is the DIVA App?',
		body: (
			<>
				The<a
					href="https://app.diva.finance/"
					className="underline mx-1"
					target={'_blank'}>
					DIVA App
				</a> is a universal app that combines multiple web3 protocols including<a
					href="https://www.divaprotocol.io/"
					className="underline mx-1"
					target={'_blank'}>
					DIVA
				</a>,<a
					href="https://www.0x.org/"
					className="underline mx-1"
					target={'_blank'}>
					0x
				</a>, as well as<a
					href="https://tellor.io/"
					className="underline mx-1"
					target={'_blank'}>
					Tellor Protocol
				</a>to offer
				users a one-stop solution to create, trade and settle derivative products. By using DIVA ViZ, you can enhance 
				the presentation of your product offers by attaching an attractive illustration 
				when sharing the link via email, chat, or social media with potential counterparties.
			</>
		),
	},
	{
		title: 'How can I use DIVA ViZ?',
		body: (
			<>
				The first step is to create a derivative product offer using the DIVA App. For this, 
				navigate to the "Create" page on the
				<a
					href="https://app.diva.finance/Create"
					className="underline mx-1"
					target={'_blank'}>
					DIVA App
				</a>
				, select the "Create Offer" option, and configure the offer according to your preferences. Once you have signed the offer with your private key 
				on step 3, copy the offer hash from the link provided (example format: 0x0ca6...1e67) and paste it into the 
				designated field on the<a
					href="https://divaviz.com"
					className="underline mx-1"
					target={'_blank'}>
					DIVA ViZ
				</a> homepage. This will generate a visually appealing card, which you can then 
				download and share via email, chat, or social media along with the offer link.
			</>
		),
	},
	{
		title: 'How can users fill the product offers?',
		body: (
			<>
				Currently, DIVA ViZ serves as a standalone visualization tool, requiring counterparties to fill 
				offers through the DIVA App by following the link shared by the offer creator (example link: https://app.diva.finance/offer/0xafca...3bc4). Our ultimate goal is 
				to integrate the functionality of offer creation, claim process, and filling offers directly within 
				the DIVA ViZ app, providing a more seamless user experience.
			</>
		),
	},
	{
		title: 'Are there any other templates available?',
		body: (
			<>
				Currently, only one template is available for visualizing product offers. We aim to expand this 
				selection over time by introducing additional templates to provide users with more options to choose from, 
				tailored to their specific product use case. If you are a designer interested in contributing 
				to this effort and gaining recognition within the DIVA community, please reach out to us on
				<a
					href="https://discord.gg/8fAvUspmv3"
					className="underline mx-1"
					target={'_blank'}>
					Discord
				</a>.
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
