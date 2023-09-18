import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() 
{

	const navigation = useNavigation()

  return (
    <div className="App">
			<Navbar />

			<section 
				className={
          navigation.state === "loading" ? "loading" : ""
        }>
				
				<div className="container mx-auto">
					<Outlet />
				</div>

			</section>

    </div>
  )
}

export default App
