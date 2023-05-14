import { cx } from 'class-variance-authority';
import InnerSectionContainer from '~/app/components/core/InnerSectionContainer';
import IFramesWrapper from './IFramesWrapper IFramesWrapper';

const HomeMyWorkSection = () => {
	return (
		<section
			id='my-work'
			className={cx(
				'overflow-x-hidden relative isolate',
				'bg-[url(/images/aleksandra-boguslawska-MS7KD9Ti7FQ-unsplash.webp)] bg-cover bg-fixed bg-center bg-no-repeat'
			)}
		>
			<div className='absolute inset-0 bg-white/90' />
			<InnerSectionContainer classVariants={{ gap: 16 }}>
				<header className='flex flex-col gap-2 text-center'>
					<h2 className='text-5xl font-semibold'>Content Editing</h2>
				</header>
				<IFramesWrapper />
			</InnerSectionContainer>
		</section>
	);
};

export default HomeMyWorkSection;
