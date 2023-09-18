import { NavLink } from 'react-router-dom'


export default function Navbar() 
{

	const classLink = 'text-gray-500'
	const activeClassName = 'text-white'


	return (
		<>
			<nav className="bg-gray-900 w-full py-3">
				<div className="container mx-auto">
					<ul className="flex justify-center gap-8 select-none">
						<li>
							<NavLink 
								to={'/'} 
								className={({ isActive }) =>
														isActive ? activeClassName : classLink
													}>
									Home
								</NavLink>
						</li>
						<li>
							<NavLink 
								to={'/about'} 
								className={({ isActive }) =>
														isActive ? activeClassName : classLink
													}>
									About
								</NavLink>
						</li>
						<li>
							<NavLink 
								to={'/blog'} 
								className={({ isActive }) =>
														isActive ? activeClassName : classLink
													}>
									Blog
									<span className="text-red-800 font-black pl-1">&middot;</span>
								</NavLink>
						</li>
						<li>
							<NavLink 
								to={'/contact'} 
								className={({ isActive }) =>
														isActive ? activeClassName : classLink
													}>
									Contact
								</NavLink>
						</li>
						<li>
							<NavLink to={'/error-404'} className={classLink}>
								Error page
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>


			<div className="container mx-auto pt-6 pb-3">
				<h1 className="text-lg font-bold text-center">React Router DOM project</h1>
			</div>
		</>
	)
}