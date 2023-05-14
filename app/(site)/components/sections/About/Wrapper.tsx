'use client';

import { cx } from 'class-variance-authority';
import { type PropsWithChildren, useRef } from 'react';
import { useIntersectionObserver } from '~/app/utils/hooks';

const Wrapper = ({ children }: PropsWithChildren) => {
	const textContainerRef = useRef<HTMLDivElement>(null);
	useIntersectionObserver(
		{
			callback: (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting)
						entry.target.classList.remove('scale-0', 'opacity-0');
					// else entry.target.classList.add("scale-0", "opacity-0");
				});
			}
		},
		textContainerRef.current
	);

	return (
		<div
			ref={textContainerRef}
			className={cx(
				'relative md:ml-auto aspect-square w-96 h-96 max-w-full rounded-full bg-white/70',
				'transition-all delay-100 duration-500',
				'scale-0 opacity-0'
			)}
		>
			{children}
		</div>
	);
};

export default Wrapper;
