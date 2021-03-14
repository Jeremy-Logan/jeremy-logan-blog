import Header from '../components/header'
import Layout from '../components/layout'
import Container from '../components/container'
import Head from 'next/head'

const Portfolio = () => {
	return (
		<Layout>
			<Head>
				<title>Recent Works by Jeremy Logan</title>
			</Head>
			<Container>
				<Header />
				<h1 className='text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left'>
					Recent Works
				</h1>
			</Container>
		</Layout>
	)
}

export default Portfolio
