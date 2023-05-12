import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/#hero' className='logo'>
			<span className='font-medium'>mekky</span>
			<span className='border-b border-dashed font-semibold'>edits</span>
		</Link>
	);
};

export default Logo;
