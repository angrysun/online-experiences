export default function Joke(props) {
  return (
    <div>
      <p>{props.setup}</p>
      <p>{props.punchline}</p>
      <hr />
    </div>
  )
}
