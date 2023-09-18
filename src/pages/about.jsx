import Layout from '../layouts/Layout'
import { useLoaderData } from 'react-router-dom'


export async function loader({ request }) {
	const url = new URL(request.url)
	console.log('url', url)
	console.log('request', request)
	await setTimeout(() => document.querySelector('.about-wrapper').classList.remove('opacity-0'), 500)
	return { test: 'esto es un test' }
}



export default function About(){
	const { test } = useLoaderData()

	return(
		<>
			<Layout>
				<div className="about-wrapper transition-all opacity-0">
					About
				</div>

				<pre>{ test }</pre>
			</Layout>
		</>
	)
}