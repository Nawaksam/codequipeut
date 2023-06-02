import { useState } from "react"

const Button = ({ peoplesList }) => {
  const [visible, setVisible] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          if (visible === 0) {
            setVisible(visible + 1)
          } else {
            setVisible(visible - 1)
          }
        }}
      >
        Infos
      </button>
      {visible === 1 && <p>{peoplesList.desc}</p>}
    </>
  )
}

export default Button
