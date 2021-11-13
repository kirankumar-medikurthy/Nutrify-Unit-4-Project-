import React from "react";
import {Entrancepage} from "./components/Home/Entrancepage"
import {SplashOne} from "./components/Splash_Screen/SplashOne"
import {SplashTwo} from "./components/Splash_Screen/SplashTwo";
//-------------------------Neha add you signup Functionality Here---------------------------->
import {Homepage} from "./components/Home/Homeone";
import {Page} from "./components/Home/Page"
import {Third} from "./components/Home/Third"
//<-----------------------Abhishek paste you code ----------------->
import {Menu} from "./components/Signup/Menu";
//-----------------------------Sumit paste your code here; --------------->
import {Nutricon} from "./components/Payment/Nutricon";
import {NutriconSecond} from "./components/Payment/NutriconSecond"
import {Checkout} from "./components/Payment/Checkout"
import {Payment} from "./components/Payment/Payment"
import { PaymentPage } from "./components/Payment/PaymentPage";
import {Status} from "./components/Payment/Status"
import './App.css';
// import {Parent} from "./components/Parent";
function App() {
  return (
    <div className="App">
      <Entrancepage/>
      <SplashOne/>
      <SplashTwo/>
      <Homepage/>
      <Page/>
      <Third/>
      <Menu/>
      <Nutricon/>
      <NutriconSecond/>
      <Checkout/>
      <Payment/>
      <PaymentPage/>
      <Status/>
    </div>
  );
}

export default App;
