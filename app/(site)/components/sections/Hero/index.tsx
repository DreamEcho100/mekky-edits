import { cx } from 'class-variance-authority';
import Wrapper from './Wrapper';

const HomeHeroSection = () => {
	return (
		<section
			id='hero'
			className={cx(
				'relative isolate h-screen max-h-[80rem] custom-section-height-semi-md:h-auto',
				'bg-[url(/images/wahid-khene-iKdQCIiSMlQ-unsplash.webp)] bg-cover bg-fixed bg-center bg-no-repeat'
			)}
		>
			<div className='absolute inset-0 bg-black/80' />
			<Wrapper>
				<div className='relative flex flex-col gap-4 text-center text-white'>
					<h1 className='text-4xl sm:text-6xl font-semibold'>
						Welcome to my portfolio
					</h1>
					<p className='text-2xl sm:text-4xl font-medium'>
						Check out my work below
					</p>
				</div>
			</Wrapper>
		</section>
	);
};

export default HomeHeroSection;
