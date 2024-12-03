import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google"
// require('dotenv').config()


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<GoogleOAuthProvider clientId="408125923641-j0o0rfjqj211fuga1nv58j5okc9cefet.apps.googleusercontent.com">
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</GoogleOAuthProvider>
	</BrowserRouter>
);