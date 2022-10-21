import { useForm } from "react-hook-form";
import React from "react";

export function Guesser(props) {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm();
//   const [guess, setGuess] = useState("");
  function onSubmit(data) {
    console.log("data: ", data);
    var upperCaseAnswer = data.guess;
    upperCaseAnswer = upperCaseAnswer.toUpperCase();
    props.compare(upperCaseAnswer)
    // setGuess("");
  }

  console.log(watch("guess")); // watch input value by passing the name of it
  return (
    <div className="guesser">
        <button className="guesserButton" id="skip" onClick={props.skip}>Skip</button>
        <button className="guesserButton" id="hint" onClick={props.hint}>Hint</button>

        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="guesserField" defaultValue="Band name" onSubmit={(e) => e.target.value = ""} onFocus={(e) => e.target.value = ""} {...register("guess")} />
            <input className="guesserButton" value="Guess" onSubmit={(e) => e.target.value = ""} type="submit" />
        </form>
    </div>
    
  );
}


