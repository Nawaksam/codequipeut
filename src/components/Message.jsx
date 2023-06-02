import { useState } from "react"

const Message = () => {
  const [input, setInput] = useState("Anonymous")

  return (
    <div>
      <h2>{`Hello, ${input}`}</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Ecris ton nom ici"
      />
    </div>
  )
}

export default Message
