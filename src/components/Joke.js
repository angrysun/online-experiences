import { useState } from "react"

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false)
  const [messages, setMessages] = React.useState(["a", "b"])
  const toggleIsShown = () => setIsShown(!isShown)

  // function toggleShown() {
  //   console.log(isShown)
  //   setIsShown(prevShown => !prevShown)
  // }

  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {/* if isShown is falsey the p tag will never run and not show up */}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={toggleIsShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      {messages.length >= 1 && <h1>You have {messages.length} unread messages!</h1>}
      <hr />
    </div>
  )
}
