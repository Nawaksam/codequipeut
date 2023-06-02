import { useState } from "react"
import "./Card.css"
import Button from "./Button"
import Filter from "./Filter"

const Card = ({ peoplesList }) => {
  const h2Style = {
    color: peoplesList.color,
  }

  return (
    <div className="card">
      <h2 style={h2Style}>{peoplesList.name}</h2>
      <img className="card-img" src={peoplesList.src} />
      <Button peoplesList={peoplesList} />
    </div>
  )
}

export default Card
