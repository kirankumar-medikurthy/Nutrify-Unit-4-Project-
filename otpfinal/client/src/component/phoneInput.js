import React from 'react';
import styles from './styles/style.module.css';
import axios from 'axios';
import '../App.css'
function PhoneInput(props) {
	const { value, handleChange, hashHandleChange, prevStep } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:8888/sendOTP', {
				phone: `${value.phone}`
			})
			.then(function(res) {
				console.log(res.data.otp);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<>
		<div className="container">
        <div className="blank"></div>
        <div className="navbar">
            <h4>JOIN</h4>
            <button className="icon"> <i class="fas fa-bars"></i></button>
        </div>
        <h2 className="auth2heading">Become a Member !</h2>
        <div className="inputfield">
        <input type="text" placeholder="Name" className="input1" /> <br />
        <input type="text" placeholder="Enter 10 digit monile number"  className="input1" type="tel"
							value={value.phone}
							onChange={handleChange('phone')}
							placeholder="Enter the Phone No."/>
        </div>
        <p className="para1">By continuing you agree to <span className="changecolor">Terms of Services</span> and <span className="changecolor">Privacy policy</span></p>
       
        <button  onClick={Continue} className="btn1">get otp</button>
        <button  onClick={prevStep} className="btn4">Back</button>
		
	
    </div>


	
		</>
	);
}

export default PhoneInput;
