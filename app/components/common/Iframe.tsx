import { cx } from 'class-variance-authority';
import type { IframeHTMLAttributes, HTMLAttributes, ForwardedRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';

type Props = IframeHTMLAttributes<HTMLIFrameElement> & {
	containerProps?: HTMLAttributes<HTMLDivElement>;
};

type ContainerRef = HTMLDivElement;

// eslint-disable-next-line react/display-name
const Iframe = forwardRef<ContainerRef, Props>(
	(
		{ containerProps = {}, src: _src, ...props }: Props,
		ref: ForwardedRef<ContainerRef>
	) => {
		const [src, setSrc] = useState<string | undefined>(undefined);

		useEffect(() => {
			const timeoutId = setTimeout(() => setSrc(_src), 1500);

			return () => {
				clearTimeout(timeoutId);
			};
		}, [_src]);

		return (
			<div
				{...containerProps}
				ref={ref}
				className={cx(
					'iframe-container relative w-full overflow-hidden',
					containerProps.className
				)}
			>
				<iframe
					loading='lazy'
					frameBorder={0}
					allowFullScreen
					{...props}
					src={_src}
					className='absolute inset-0 h-full w-full'
				/>
			</div>
		);
	}
);
export default Iframe;
