import './App.css';
import { useEffect, useState } from 'react';

import { Guesser } from './components/guesser';
import { Header } from './components/Header';
import { BandImg } from './components/BandImg';
import { DisplayGuess } from './components/DisplayGuess';
import bandData from './bandLogoInfo.json';
function App() {
  const [guess, setGuess] = useState('');
  const [bandInfo, setBandInfo] = useState(bandData[Math.floor(Math.random() * bandData.length)]);
  const [title, setTitle] = useState('Guess the Band');
  const [attemps, setAttemps] = useState(0);
  var changableTitleArray = ["Guess the band","Correctoamundo!"," tries"]
  // get a random band from the bandData
  function createBandInfo(){
    setBandInfo(bandData[Math.floor(Math.random() * bandData.length)]);
    setTitle(changableTitleArray[0]);
    setGuess('');
  }





  function compareNames(guessedName){
    setAttemps(attemps + 1);
    setGuess(guessedName);
    // var upperCaseGuess = guessedName.toUpperCase();
    console.log("your guess: ",guessedName);
    console.log("answer: ", bandInfo.name);
    if(guessedName === bandInfo.name){
      console.log("correct");
      setTitle(changableTitleArray[1]);

      // set timeer to change band info
      setTimeout(() => {
        createBandInfo();
        setGuess('');
        setTitle(changableTitleArray[0]);

      }, 3000);
      
    }
    else{
      setTitle(attemps + changableTitleArray[2]);
      console.log("incorrect");
    }
  }

  function giveHint(){
    console.log("hint");
    for (var i = 0; i < bandInfo.name.length; i++) {
      if (guess[i] !== bandInfo.name[i]) {
        // convert string to array
        var guessArray = guess.split('');
        console.log("guessArray: ", guessArray);
        console.log("bandInfo.name[i]: ", i,  bandInfo.name[i], bandInfo.name);
        guessArray[i] = bandInfo.name[i];
        // convert array to string
        var newGuess = guessArray.join('');
        console.log("new guess: ", newGuess);
        setGuess(newGuess);
        break;
      }
    }
  }
  return (
    <div className="App">
      <Header title={title} />
      <BandImg bandImg = {"logos/" + bandInfo.img}/>
      <DisplayGuess bandName={bandInfo.name} guess={guess} />
      <Guesser bandName={bandInfo.name} compare={compareNames} skip={createBandInfo} hint={giveHint}/>
    </div>
  );
}

export default App;
