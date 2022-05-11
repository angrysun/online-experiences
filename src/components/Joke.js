import { useState } from "react"

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false)
  const [messages, setMessages] = React.useState(["a", "b"])
  const toggleIsShown = () => setIsShown(!isShown)

  // function toggleShown() {
  //   console.log(isShown)
  //   setIsShown(prevShown => !prevShown)
  // }

  const singular = messages.length === 1 ? "" : "s"

  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {/* if isShown is falsey the p tag will never run and not show up */}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={toggleIsShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      {/* {messages.length >= 1 && <h1>You have {messages.length} unread messages!</h1>} */}
      {
        messages.length > 0 ?
        <h1>`You have ${messages.length} unread message${singular}`</h1> :
        <h1>"You're all caught up!"</h1>
      }
      <hr />
    </div>
  )
}
