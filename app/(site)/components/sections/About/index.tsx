import { cx } from 'class-variance-authority';
import InnerSectionContainer from '~/app/components/core/InnerSectionContainer';
import Wrapper from './Wrapper';

const HomeAboutSection = () => {
	return (
		<section
			id='about'
			className={cx(
				'relative isolate h-screen max-h-[80rem] custom-section-height-semi-lg:h-auto',
				'bg-[url(/images/matthias-wagner-QrqeusbpFMM-unsplash.webp)] bg-cover bg-fixed bg-center bg-no-repeat'
			)}
		>
			<div className='absolute inset-0 bg-black/80' />
			<InnerSectionContainer className='flex justify-center'>
				<h2 className='text-5xl font-semibold capitalize text-white/80'>
					about me
				</h2>
				<Wrapper>
					<div className='absolute inset-[15%] flex items-center justify-self-center text-center'>
						<p className='text-3xl'>
							A video editor passionate about brining creative ideas to life.
						</p>
					</div>
				</Wrapper>
			</InnerSectionContainer>
		</section>
	);
};

export default HomeAboutSection;
