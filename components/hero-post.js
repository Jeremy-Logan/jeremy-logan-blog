import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from './markdown-styles.module.css'

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div className='mb-8 md:mb-16' id='blog-hero'>
				<CoverImage
					slug={slug}
					imageObject={coverImage}
					title={title}
					url={coverImage}
					
				/>
			</div>
			<div  className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28'>
				<div>
					<h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a className='hover:underline'>{title}</a>
						</Link>
					</h3>

					<div>
						<div className='flex flex-row mb-6 text-lg justify-between items-center'>
							<Avatar
              
								name={author?.name}
								picture={author?.picture}
							/>
							<Date dateString={date} className=''/>
						</div>

						<BlockContent
							blocks={excerpt}
							projectId={
								process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
							}
							dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
							className={markdownStyles.markdown}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
