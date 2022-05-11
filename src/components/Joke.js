import { useState } from "react"

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false)
  const toggleIsShown = () => setIsShown(!isShown)

  // function toggleShown() {
  //   console.log(isShown)
  //   setIsShown(prevShown => !prevShown)
  // }

  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <button onClick={toggleIsShown}>
        Click me
      </button>
      <hr />
    </div>
  )
}
