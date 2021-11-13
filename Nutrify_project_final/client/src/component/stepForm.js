import React, { useEffect, useRef, useState } from "react";
// import "./OTP/styleOTP.css";
// import "./TestSorting/styleTest.css"
import Entrancepage from "./Home/Entrancepage";
import { SplashOne } from "./Splash_Screen/SplashOne";
import { SplashTwo } from "./Splash_Screen/SplashTwo";
// //-------------------------Neha add you signup Functionality Here---------------------------->
import PhoneInput from "./OTP/phoneInput";
import Otpverify from "./OTP/otpVerify";
import Home from "./OTP/home"
import {Homepage} from "./Home/Homeone";  
//  not woring
import {Page} from "./Home/Page"
import {Third} from "./Home/Third"
// //<-----------------------Abhishek paste you code ----------------->
import Test from './TestSorting/Test';
import Test2 from './TestSorting/Test2';
import Test3 from './TestSorting/Test3';
import Test4 from './TestSorting/Test4';
import Test6 from './TestSorting/Test6';
import {Menu} from "./Signup/Menu";
// //-----------------------------Sumit paste your code here; --------------->
import {Nutricon} from "./Payment/Nutricon";
// import {NutriconSecond} from "./components/Payment/NutriconSecond"
// import './App.css';
const StepForm = () => {
  const [state, setState] = useState({
    phone: "",
    hash: "",
    otp: "",
  });

  //------------abhistate----------
  const [ state4, setState4 ] = useState({});
	const [ state1, setState1 ] = useState({});
	const [ state2, setState2 ] = useState({});
	const [ state3, setState3 ] = useState({});

  const [step, setStep] = useState(0);


  //---------  Home----------------
  useEffect(() => {
    handleStep1();
  }, []);

  const handleStep1 = () => {
    const timer = setInterval(() => {
      console.log(step);
      setStep(step + 1);
      clearInterval(timer);
    }, 3000);
  };

  const handleStep=()=>{
    console.log("clicked")
    setStep(step+1)
  }

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };
  const hashHandleChange = (hash) => {
    setState({ ...state, hash: hash });
  };
  const nextStep = () => {
    console.log("clicked")
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const { phone, hash, otp } = state;
  const value = { phone, hash, otp };


  //-------------abhi functions----------
  const handleChange0=(e)=>{
    const {name,checked}=e.target
    setState4({...state4,[name]:checked})
}
const handleChange1=(e)=>{
    const {name,checked}=e.target
    setState1({...state1,[name]:checked})
}
const handleChange2=(e)=>{
    const {name,checked}=e.target
    setState2({...state2,[name]:checked})
}
const handleChange3=(e)=>{
    const {name,checked}=e.target
    setState3({...state3,[name]:checked})
}

  const data=  Object.entries(state4).filter(([key, value]) => value)
  const data1= Object.entries(state1).filter(([key, value]) => value)
  const data2= Object.entries(state2).filter(([key, value]) => value)
  const data3= Object.entries(state3).filter(([key, value]) => value)

  console.log(step,'step')


  switch (step) {
    case 0:
      return <Entrancepage />;
    case 1:
      return <SplashOne handleStep={handleStep} />;
    case 2:
      return <SplashTwo  handleStep={handleStep} />;
    case 3:
      return (
        <PhoneInput
          nextStep={nextStep}
          hashHandleChange={hashHandleChange}
          prevStep={prevStep}
          handleChange={handleChange}
          value={value}
        />
      );
    case 4:
      return (
        <Otpverify
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          value={value}
        />
      );
    case 5:
      // return <New nextStep={nextStep}/>
      return (
        <Home
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          value={value}
        />
      );
      // case 6:
      //   return <Homepage />
      case 6:
        return <Page handleStep={handleStep} />
      case 7:
        return <Third handleStep={handleStep}/>
      case 8:
        return <Test handleChange0={handleChange0} handleClick={handleStep} handleData={data}/>
      case 9:
        return <Test2 handleChange1={handleChange1} handleClick={handleStep} handleData={data1}/>
      case 10:
        return <Test3 handleChange2={handleChange2} handleClick={handleStep} handleData={data2}/>
      case 11:
        return <Test4 handleChange3={handleChange3} handleClick={handleStep1} handleData={data3}/>
      case 12:
        return <Test6 handleClick={handleStep}/>
      case 13:
        return <Menu handleClick={handleStep}/>
      case 14:
        return <Test6 handleClick={handleStep1}/>
      // default:
    //   return (
    //     <PhoneInput
    //       nextStep={nextStep}
    //       handleChange={handleChange}
    //       value={value}
    //     />
    //   );
    default:return <SplashTwo/>
  }
};

export default StepForm;
