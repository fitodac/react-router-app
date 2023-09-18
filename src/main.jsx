import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'

// import { RouterProvider } from 'react-router-dom'
// import router from './router/router-config'

import { BrowserRouter } from "react-router-dom"
import App from './App2'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
  </React.StrictMode>,
)
