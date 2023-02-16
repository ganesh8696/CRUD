import React from 'react'
import { SimpleGrid, ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import styles from './styles.module.css'
export default function Footer() {
	return (
		<div className={styles.container}>
			<Grid templateColumns="repeat(5, 1fr)" gap={20}>
				<div>
					<ul>
						<a href="# ">
							<div className="flex-shrink-0 w-30 pb-5 ">
								<img src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg" />
							</div>
						</a>
						<a href="#" className="flex flex-row pb-3 lg:block">
							<div className="flex-shrink-0 w-5">
								<img src="https://chisnghiax.com/ciscryp/static/media/facebook.8291c7f7c187e8f09292cced2ed0278d.svg" />
							</div>
							<span className="text-sm ml-2">Facebook</span>
						</a>
						<a href="#" className="flex flex-row pb-3 lg:block">
							<div className="flex-shrink-0 w-5">
								<img src="https://chisnghiax.com/ciscryp/static/media/vimeo.539e4985d2c0dced329fe8bfebf273db.svg" />
							</div>
							<span className="text-sm ml-2">Vimeo</span>
						</a>
						<a href="#" className="flex flex-row pb-3 lg:block">
							<div className="flex-shrink-0 w-5">
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/450px-YouTube_social_red_circle_%282017%29.svg.png?20220808215554" />
							</div>
							<span className="text-sm ml-2">Youtube</span>
						</a>
						<a href="#" className="flex flex-row pb-3 lg:block">
							<div className="flex-shrink-0 w-5">
								<img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/7/2020_7$largeimg_1524483931.png" />
							</div>
							<span className="text-sm ml-2">Telegram</span>
						</a>
						<a href="#" className="flex flex-row pb-3 lg:block">
							<div className="flex-shrink-0 w-5">
								<img src="https://climateawakening.org/wp-content/uploads/2021/02/26-261527_newsletter-twitter-twitter-circle-logo-svg.png" />
							</div>
							<span className="text-sm ml-2">Twitter</span>
						</a>
					</ul>
				</div>
				<ul>
					<h1 className="text-1xl font-bold pb-3 col-3">Getting started</h1>
					<li className="mb-2">Installation</li>
					<li className="mb-2">Release Notes</li>
					<li className="mb-2">Upgrade Guide</li>
					<li className="mb-2">Browser Support</li>
					<li className="mb-2">Editor Support</li>
					<li className="mb-2">Dark Mode</li>
				</ul>

				<ul>
					<h1 className="text-1xl font-bold pb-3 col-3">Explore</h1>
					<li className="mb-2">Design features</li>
					<li className="mb-2">Prototyping</li>
					<li className="mb-2">Design systems</li>
					<li className="mb-2">Pricing</li>
					<li className="mb-2">Customers</li>
					<li className="mb-2">Security</li>
				</ul>

				<ul>
					<h1 className="text-1xl font-bold pb-3 col-3">Resources</h1>
					<li className="mb-2">Best practices</li>
					<li className="mb-2">Support</li>
					<li className="mb-2">Developers</li>
					<li className="mb-2">Learn design</li>
					<li className="mb-2">What's new</li>
					<li className="mb-2">Releases</li>
				</ul>

				<ul>
					<h1 className="text-1xl font-bold pb-3 col-3">Community</h1>
					<li className="mb-2">Discussion Forums</li>
					<li className="mb-2">Code of Conduct</li>
					<li className="mb-2">Community Resources</li>
					<li className="mb-2">Contributing</li>
					<li className="mb-2">Concurrent Mode</li>
					<li className="mb-2">API Reference</li>
				</ul>
			</Grid>
		</div>
	)
}
