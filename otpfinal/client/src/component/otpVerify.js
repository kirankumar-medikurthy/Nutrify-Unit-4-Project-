import React, { useState } from 'react';
import styles from './styles/style.module.css';
import axios from 'axios';

function OtpVerify(props) {
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	const { value, handleChange } = props;
	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const confirmOtp = () => {
		axios
			.post('http://localhost:8888/verifyOTP', {
				phone: `${value.phone}`,
				hash: `${value.hash}`,
				otp: `${value.otp}`,
				withCredentials: true
			})
			.then(function(res) {
				console.log(res.data);
				window.location.reload();
			})
			.catch(function(error) {
				console.log(error.response.data);
				setError({ ...error, error: error.response.data.msg });
			});
	};

	


	return (

		 <div className="container">
        <div className="blank"></div>
        <div className="navbar">
            <h4>JOIN</h4>
            <button className="icon"> <i class="fas fa-bars"></i></button>
        </div>
        <h3 className="auth2heading">Please enter the OTP</h3>
        <div className="otp">
		<input
							type="tel"
							value={value.otp}
							onChange={handleChange('otp')}
							placeholder="Enter the 6 digits OTP"
							className="dashed"
						/>
        </div>
       
        <button className="btn2" onClick={confirmOtp} >confirm</button><br/>
		<button onClick={back} className="back">
						Back
					</button>
        <p className="mobile">Get OTP on Mobile in 30 sec</p>
        <div className="mobileOtp">
        <p>Didn't recieve OTP ? </p>
        <button style={{color:"red",border:"none",background:"white"}}>Resend</button>
	
        </div>
    </div>

		
	);
}

export default OtpVerify;
