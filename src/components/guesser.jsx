import { useForm } from "react-hook-form";

export function Guesser() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm();
  const bandName = "condemned";
  function onSubmit(data) {
    compareGuess(data.guess);
  }
  function compareGuess(guess) {
    console.log("guessed name: ", guess);
    if (guess === bandName) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  }

  console.log(watch("guess")); // watch input value by passing the name of it

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="Band name" {...register("guess")} />
        <input type="submit" />
      </form>
    </>
  );
}


