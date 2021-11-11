
import './App.css';
import {Page} from "./components/Home/Page"
import {Third} from "./components/Home/Third"
import {Entrancepage} from "./components/Home/Entrancepage"
import {SplashOne} from "./components/Splash_Screen/SplashOne"
import {SplashTwo} from "./components/Splash_Screen/SplashTwo";
import {Menu} from "./components/Signup/Menu";
import {Nutricon} from "./components/Payment/Nutricon";
import {NutriconSecond} from "./components/Payment/NutriconSecond"
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Nutrify project</h1>
      <Page />
      <Third/>
      <Entrancepage/>
      <SplashOne/>
      <SplashTwo/>
      <Menu/>
      <Nutricon/>
      <NutriconSecond/>
    </div>
  );
}

export default App;
