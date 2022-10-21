import React from "react";
export const DisplayGuess = (props) => {
    const bandName = props.bandName;
    const guessedName = props.guess;
    var guessBlocks = [];
    if (guessedName === "") {
        for (let i = 0; i < bandName.length; i++) {
            if (bandName.charAt(i) === " ") {
                guessBlocks.push(<span key={i} className="guessBlock" style={{ backgroundColor: 'red'}}>{' '}</span>);
            }
            else {
                guessBlocks.push(<span key={i} className="guessBlock">{' '}</span>);
            }
        }
    }
    else {
        for (let i = 0; i < bandName.length; i++) {
            if (guessedName.charAt(i) === bandName.charAt(i) && guessedName.charAt(i) === " ") {
                guessBlocks.push(<span key={i} className="guessBlock" style={{ backgroundColor: 'green'}}>{guessedName.charAt(i)}</span>);
            }
            else if (bandName.charAt(i) === " ") {
                guessBlocks.push(<span key={i} className="guessBlock" style={{ backgroundColor: 'red'}}>{' '}</span>);
            }

            else {
                if (guessedName[i] === bandName[i]) {
                    guessBlocks.push(<span key={i} className="guessBlock" style={{ borderColor: 'green'}}>{guessedName[i]}</span>);
                }
                else {
                    guessBlocks.push(<span key={i} className="guessBlock">{' '}</span>);
                }
            }
        }
    }


  return (
    <div className="displayGuess">
        {guessBlocks}
    </div>
  );
};
