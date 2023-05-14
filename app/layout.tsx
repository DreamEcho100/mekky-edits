import Link from 'next/link';
import Logo from '~/app/components/core/Logo';
import '~/app/globals.css';
import { robotoFont, montserratAlternatesFont } from '~/app/utils/fonts';
import { getCopyRightDate } from './utils';
import { BsInstagram } from 'react-icons/bs';
import { type PropsWithChildren } from 'react';

export const metadata = {
	title: 'Mekky Edits',
	description: 'A video editor passionate about brining creative ideas to life.'
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				<header
					className='fixed inset-x-0 z-[2] bg-black/90 text-white backdrop-blur-sm'
					id='main-header'
				>
					<div className='mx-auto flex h-16 max-w-main-max-w items-center justify-between px-8'>
						<Logo />
						<ul className='flex h-full items-center justify-center gap-2 capitalize'>
							<li>
								<Link href='/#my-work'>my work</Link>
							</li>
							<li>
								<Link href='/#about'>about</Link>
							</li>
						</ul>
					</div>
				</header>
				<main className='flex flex-col justify-start'>{children}</main>
				<footer className='flex justify-between gap-1 bg-neutral-900 px-8 py-16 text-white'>
					<div className='flex items-center gap-2'>
						<Logo /> &#124;
						<a
							href='https://www.instagram.com/abdelrhman.mekky/'
							target='_blank'
							rel='noreferrer noopener'
							title='instagram'
							className='translate-y-[15%] hover:text-violet-600 focus:text-violet-600'
						>
							<BsInstagram />
						</a>
					</div>
					<small>
						&copy; {getCopyRightDate()} &#124; All rights reserved &#124;
						Created by{' '}
						<a
							href='https://github.com/DreamEcho100/'
							target='_blank'
							rel='noreferrer noopener'
						>
							DreamEcho100
						</a>
					</small>
				</footer>
				<span className={robotoFont.className} />
				<span className={montserratAlternatesFont.className} />
			</body>
		</html>
	);
}
