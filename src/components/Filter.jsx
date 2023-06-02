const Filter = ({ peoplesList }) => {
  const cool = peoplesList.filter((person) => person.mood === "cool")

  return (
    <div>
      <button>Cool</button>
    </div>
  )
}

export default Filter
