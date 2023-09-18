import Navbar from '../components/Navbar'

export default function Layout(props) 
{
	return (
		<>
			<Navbar />

			<div className="container mx-auto pt-6 pb-20">
				<main>{props.children}</main>
			</div>
		</>
	)
}