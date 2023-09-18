import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Index from '../pages/index'
import About, {
	loader as loaderAbout
} from '../pages/about'
import Contact, {
	loader as loaderContact,
	action as actionContact
} from '../pages/contact'
import Blog from '../pages/blog'

import ErrorPage from '../pages/error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
		children: [
			{ 
				index: true, 
				element: <Index /> 
			},
			{
				path: '/blog',
				element: <Blog />
			}
		]
  },
	{
		path: '/about',
		element: <About />,
		loader: loaderAbout,
		errorElement: <ErrorPage />,
	},
	{
		path: '/contact',
		element: <Contact />,
		loader: loaderContact,
		action: actionContact,
		errorElement: <ErrorPage />,
	}
])

export default router