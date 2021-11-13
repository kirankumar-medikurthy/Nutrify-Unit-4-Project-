import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/home.module.css';

axios.defaults.withCredentials = true;
function Home() {
	const [ state, setState ] = useState({
		value: 'Private Protected Route - Home'
	});

	/*  The UseEffect below is used to verify the working of Protected Route. 
	 Do not use it aimlessly as it will cause performance issue and server timout due to infinite execution in loop

	useEffect(() => {
		console.log(state.value)
		axios
			.post('http://localhost:8888/home', {
				withCredentials: true
			})
			.then(function(res) {
				// console.log(res.data);
				setState({ ...state, value: res.data });
			})
			.catch(function(error) {
				console.log(error.response);
			});
	},[state]);
	*/

	const logout = () => {
		axios
			.get('http://localhost:8888/logout')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
		window.location.reload();
	};
	return (
<div className="container">
          <div className="division">
              <h3>Success!</h3>
              <p>Your Device has been connected</p>
          </div>
          <div className="image">
              <img src="https://images.pond5.com/animation-motion-graphics-check-mark-footage-127154248_iconl.jpeg" alt="image" />
          </div>
          <div className="bottom">
              <button className="btn3" onClick={logout}>Done</button>
          </div>
    </div>
	);
}

export default Home;
