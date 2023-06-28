import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PoolOffer from '../../components/poolOffer'
import { useWhitelist } from '../../hooks/useWhitelist'
import axios, { AxiosError } from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CHAIN_INFO } from '../../constant'

const PoolDetails = () => {
	const router = useRouter()
	const [poolData, setPoolData] = useState(null)
	const [isPoolLoading, setIsPoolLoading] = useState(false)
	const dataSource = useWhitelist()
	const [dataSourceName, setDataSourceName] = useState('')
	const [isErrorFetching, setIsErrorFetching] = useState(false)
	const { slug } = router.query

	useEffect(() => {
		if (slug) {
			const chainId = Number(slug[0])
			const offerHash = slug[1]
			setIsPoolLoading(true)
			axios(
				`${CHAIN_INFO[chainId].offer}` + 'create_contingent_pool/' + offerHash
			)
				.then((data) => {
					setPoolData(data.data)
					setIsPoolLoading(false)
				})
				.catch((err: AxiosError) => {
					setIsErrorFetching(true)
					if (err.response!.status === 500) {
						setIsPoolLoading(false)
					}
				})
		}
	}, [slug])

	useEffect(() => {
		if (poolData?.dataProvider) {
			const dataName = dataSource?.dataProviders?.find(
				(dataName: { id: string }) => dataName?.id == poolData?.dataProvider
			)
			if (dataName?.name != null) {
				setDataSourceName(dataName?.name)
			} else {
				setDataSourceName(poolData?.dataProvider)
			}
		}
	}, [dataSource.dataProviders, poolData?.dataProvider])

	return (
		<div className="text-white mt-16 pb-0">
			<button
				onClick={() => {
					router.push('/')
				}}>
				<div className="flex items-center px-16 text-[#8A8A8A] text-base font-text">
					<div className="mr-2">
						<img src="/nav-arrow.svg" alt="arrow" width={32} />
					</div>
					<div>Back to Home</div>
				</div>
			</button>
			<div className="flex flex-col items-center justify-center bg-black">
				{isErrorFetching ? (
					<div className="text-xl font-text text-[#D2D2D2] font-light mt-10">
						<h1 className="text-6xl font-bold text-center capitalize">
							Offer not found
						</h1>
						<div className="text-xl font-text text-[#D2D2D2] mt-6 font-light">
							This offer is unavailable because it was already filled, expired
							or considered invalid
						</div>
					</div>
				) : (
					<>
						<h1 className="text-6xl font-bold font-cirka tracking-wider">
							Your offer post is here!
						</h1>
						<div className="text-xl font-text text-[#D2D2D2] mt-6 font-light">
							You can now share this across the world to get your offer filled
						</div>
						{isPoolLoading || !poolData ? (
							<div className="mt-6">
								<Skeleton
									width={861.51}
									height={500}
									baseColor="#202020"
									highlightColor="#444"
								/>
							</div>
						) : (
							<PoolOffer
								pool={{ ...poolData, dataSourceName: dataSourceName }}
							/>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default PoolDetails
