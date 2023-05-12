'use client';

import { cx } from 'class-variance-authority';
import { type PropsWithChildren, useRef } from 'react';
import InnerSectionContainer from '~/app/components/core/InnerSectionContainer';
import { useIntersectionObserver } from '~/app/utils/hooks';

const Wrapper = ({ children }: PropsWithChildren) => {
	const textContainerRef = useRef<HTMLDivElement>(null);
	useIntersectionObserver(
		{
			callback: (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting)
						entry.target.classList.remove(
							'scale-0',
							'opacity-0',
							'-translate-y-1/2'
						);
					// else entry.target.classList.add("scale-0", "opacity-0");
				});
			}
		},
		textContainerRef.current
	);

	return (
		<InnerSectionContainer
			classVariants={{ py: 64 }}
			ref={textContainerRef}
			className={cx(
				'flex h-full w-full items-center justify-center',
				'-translate-y-1/2 scale-0 opacity-0',
				'transition-all delay-100 duration-1000'
			)}
		>
			{children}
		</InnerSectionContainer>
	);
};

export default Wrapper;
