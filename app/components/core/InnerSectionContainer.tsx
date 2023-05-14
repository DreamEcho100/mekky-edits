import type { PropsWithChildren, HTMLAttributes, ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const classVariantsHandler = cva(
	'relative mx-auto flex w-full h-full sm:max-w-main-max-w flex-col',
	{
		variants: {
			gap: { 8: 'gap-8', 16: 'gap-16' },
			px: {
				16: 'px-16',
				'4_sm:16': 'px-4 sm:px-16',
				32: 'px-32',
				64: 'px-64',
				'8_sm:64': 'px-8 sm:px-64'
			},
			py: {
				16: 'py-16',
				'4_sm:16': 'py-4 sm:py-16',
				32: 'py-32',
				64: 'py-64',
				'8_sm:64': 'py-8 sm:py-64'
			}
		},
		defaultVariants: { gap: 8, py: 32, px: '4_sm:16' }
	}
);

type DivRef = HTMLDivElement;

// eslint-disable-next-line react/display-name
const InnerSectionContainer = forwardRef<
	DivRef,
	HTMLAttributes<HTMLDivElement> &
		PropsWithChildren & {
			classVariants?: VariantProps<typeof classVariantsHandler>;
		}
>(
	(
		{
			children,
			className,
			classVariants = {}
		}: HTMLAttributes<HTMLDivElement> &
			PropsWithChildren & {
				classVariants?: VariantProps<typeof classVariantsHandler>;
			},
		ref: ForwardedRef<DivRef>
	) => {
		return (
			<div
				ref={ref}
				className={classVariantsHandler({
					...classVariants,
					className
				})}
			>
				{children}
			</div>
		);
	}
);

export default InnerSectionContainer;
