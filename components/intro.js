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
				<button className='bg-blue-200 shadow-md py-2 px-3 rounded-md border-2 border-blue-600 transition duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:bg-blue-300'>
        <Link href='/portfolio'> 
					Creative Works
          </Link>
				</button>{' '}
				and{' '}
				<button className='bg-blue-200 shadow-md py-2 px-3 rounded-md border-2 border-blue-600 transition duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:bg-blue-300'>
					{' '}
					<Link href='/#blog-hero'>Musings</Link>
				</button>
			</h4>
		</section>
	)
}
