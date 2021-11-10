
import './App.css';
import {Page} from "./components/Home/Page"
import {Third} from "./components/Home/Third"
import {Entrancepage} from "./components/Home/Entrancepage"
import {SplashOne} from "./components/Splash_Screen/SplashOne"
import {SplashTwo} from "./components/Splash_Screen/SplashTwo";
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Nutrify project</h1>
      <Page />
      <Third/>
      <Entrancepage/>
      <SplashOne/>
      <SplashTwo/>
    </div>
  );
}

export default App;
