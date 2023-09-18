import { useState } from 'react'
import { 
	Routes, 
	Route,
	Outlet, 
	useNavigation 
} from 'react-router-dom'

import Index from './pages/index'
import About, {
	loader as aboutLoader
} from './pages/about2'
import Blog from './pages/blog'
import Contact from './pages/contact2'

import Navbar from './components/Navbar'

function App() 
{

	// const navigation = useNavigation()

  return (
		<>
		<Navbar />
  
		<div className="container mx-auto">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} loader={aboutLoader} />
				<Route path="/block" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
		</>
  )
}

export default App
