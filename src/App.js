import './App.css';
import { Guesser } from './components/guesser';
import {Header} from './components/Header';
import {BandImg} from './components/BandImg';
import { DisplayGuess } from './components/DisplayGuess';

function App() {
  const bandInfo = {
    name: "death",
    img: "logos/death.jpg"
  }
  return (
    <div className="App">
      <Header />
      <BandImg bandImg = {bandInfo.img}/>
      <DisplayGuess bandName={bandInfo.name} />
      <Guesser />
    </div>
  );
}

export default App;
