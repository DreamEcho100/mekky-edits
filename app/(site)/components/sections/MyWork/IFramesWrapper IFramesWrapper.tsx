'use client';

import { cx } from 'class-variance-authority';
import { Suspense, useRef } from 'react';
import { useIntersectionObserver } from '~/app/utils/hooks';
import Iframe from '~/app/components/common/Iframe';

const IFramesWrapper = () => {
	const iframeContainerRef1 = useRef<HTMLDivElement>(null);
	const iframeContainerRef2 = useRef<HTMLDivElement>(null);
	useIntersectionObserver(
		{
			callback: (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting)
						entry.target.classList.remove('rotate-[25deg]');
					// else entry.target.classList.add("rotate-[25deg]");
				});
			},
			options: { threshold: 0.5 }
		},
		iframeContainerRef1.current,
		iframeContainerRef2.current
	);

	return (
		<div className='flex flex-wrap sm:flex-nowrap  gap-8'>
			<Iframe
				ref={iframeContainerRef1}
				containerProps={{
					className: cx(
						'perspective-animation rotate-[25deg] mx-auto max-w-full aspect-ratio-1-1 sm:aspect-ratio-16-9',
						'transition-all duration-500 delay-500'
					)
				}}
				title='vimeo-player'
				src='https://player.vimeo.com/video/822644379?h=4b7aafc862'
				width={640}
				height={300}
			/>
			<Iframe
				ref={iframeContainerRef2}
				containerProps={{
					className: cx(
						'perspective-animation rotate-[25deg] mx-auto max-w-full aspect-ratio-1-1 sm:aspect-ratio-16-9',
						'transition-all duration-500 delay-100'
					)
				}}
				title='vimeo-player'
				src='https://player.vimeo.com/video/822643020?h=f837ecca64'
				width={640}
				height={680}
				allow='autoplay; fullscreen; picture-in-picture'
			/>
		</div>
	);
};

export default IFramesWrapper;
