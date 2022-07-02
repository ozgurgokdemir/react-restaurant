import { Link } from 'react-router-dom';

const Navbar = () => {
	const linkClasses = 'text-lg font-medium text-[#353535] hover:opacity-70';
	return (
		<nav className='flex gap-12'>
			<Link to='/' className={linkClasses}>Home</Link>
			<Link to='' className={linkClasses}>Menu</Link>
			<Link to='' className={linkClasses}>Popular</Link>
		</nav>
	);
};

export default Navbar;
