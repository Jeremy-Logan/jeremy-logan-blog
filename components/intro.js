import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function Intro() {
	return (
		<section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
			<h1 className='text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8'>
				Think Jeremy Logan
			</h1>
			<h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
				A Page for My{' '}
				<button className='bg-yellow-200 shadow-md py-2 px-3 rounded-sm transition duration-300 ease-in-out hover:shadow-lg hover:bg-yellow-300 '>
        <Link href='/portfolio'> 
					Creative Works
          </Link>
				</button>{' '}
				and{' '}
				<button className='bg-yellow-200 shadow-md py-2 px-3 rounded-sm transition duration-300 ease-in-out hover:shadow-lg hover:bg-yellow-300'>
					{' '}
					<Link href='/#blog-hero'>Musings</Link>
				</button>
			</h4>
		</section>
	)
}
