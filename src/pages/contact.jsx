import { 
	Form, 
	useLoaderData,
	redirect 
} from 'react-router-dom'
import Layout from '../layouts/Layout'


export async function loader({ request }) {
  const url = new URL(request.url)
  return { data_from_loader: 'test data bla, bla, bla' }
}


export async function action({ request, params }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData)
  console.log(`Se envían estos datos`, data)
	return redirect('/contact')
}


export default function Contact(){

	const contact = useLoaderData()

	return(
		<>
			<Layout>
				<div className="text-xl">Contact</div>

				<Form 
					method="post"
					className="w-72 mt-3 grid gap-y-6">
					<div className="grid">
						<label className="text-sm">Name</label>
						<input 
							type="text" 
							name="name"
							// defaultValue={contact.name}
							defaultValue="John Doe"
							className="text-gray-700 px-4 py-2 mt-1 rounded" />
					</div>

					<div className="grid">
						<label className="text-sm">Email</label>
						<input 
							type="text" 
							name="email"
							// defaultValue={contact.email}
							defaultValue="j.doe@local.com"
							className="text-gray-700 px-4 py-2 mt-1 rounded" />
					</div>

					<div className="">
						<button 
							className="bg-gray-700 px-10 py-2 rounded hover:bg-gray-600">
							Submit
						</button>
					</div>
				</Form>
			</Layout>
		</>
	)
}