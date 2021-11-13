import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
const Parent = () => {

	const [ state, setState ] = useState({});
	const [ state1, setState1 ] = useState({});
	const [ state2, setState2 ] = useState({});
	const [ state3, setState3 ] = useState({});
    const [step, setStep] = useState(0)


    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log(timer)
               setStep(step+1)
               clearInterval(timer)
        },3000)
    },[])

    const handleChange=(e)=>{
        const {name,checked}=e.target
        setState({...state,[name]:checked})
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
	
	const handleClick =() => {
        setStep(prevStep => prevStep + 1)
	};


  const data=  Object.entries(state).filter(([key, value]) => value)
  const data1=  Object.entries(state1).filter(([key, value]) => value)
  const data2=  Object.entries(state2).filter(([key, value]) => value)
  const data3=  Object.entries(state3).filter(([key, value]) => value)
    
  console.log(data,data1,data2,data3)
      
    
	switch (step) {
        case 0:
            return <Test5 />
		case 1:
			return <Test   handleChange={handleChange} handleClick={handleClick} handleData={data} />
		case 2:
            return <Test2   handleChange={handleChange1} handleClick={handleClick} handleData={data1}/>
        case 3:
            return <Test3  handleChange={handleChange2} handleClick={handleClick} handleData={data2} />  
        case 4:
            return <Test4  handleChange={handleChange3} handleClick={handleClick} handleData={data3} />  
         case 5 :
             return <Test6/>
      
    }
};

export default Parent;
