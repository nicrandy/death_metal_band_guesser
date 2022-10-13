import React from "react";
export const DisplayGuess = (props) => {
    const bandName = props.bandName;
    var guessBlocks = [];
    for (let i = 0; i < bandName.length; i++) {
        guessBlocks.push(<span key={i} className="guessBlock">{bandName[i]}</span>);
    }
  return (
    <div className="displayGuess">
        {guessBlocks}
    </div>
  );
};
