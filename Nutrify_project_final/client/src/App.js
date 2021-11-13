import React from 'react';
import './component/OTP/styleOTP.css'
import StepForm from './component/stepForm';
import auth from './auth';
import Home from './component/OTP/home';

function App() {
	// if (auth.isAuthenticated()) return <Home />;
	// else
	 return <StepForm />;
}



export default App;
