import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Message from "./components/Message"
import Card from "./components/Card"
import Filter from "./components/Filter"

const peoplesList = [
  {
    name: "Sabba",
    src: "https://scontent-cdg4-1.xx.fbcdn.net/v/t1.6435-9/48208593_2491492847557408_943993237104754688_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=CXnwa2Ep118AX_fN-62&_nc_ht=scontent-cdg4-1.xx&oh=00_AfDWZwmgvfMq9jkPgMv2kuXLZZBiTOC75lSnes4wYW56zg&oe=64A105B5",
    desc: "T'as pas 20 Balles?",
    color: "#037171",
    mood: "cool",
  },
  {
    name: "Sangoku",
    src: "https://pbs.twimg.com/media/DaCSte_WAAATznF?format=jpg&name=large",
    desc: "Kamehamehaaaaa",
    color: "#fca311",
    mood: "not cool",
  },
  {
    name: "Tortue Géniale",
    src: "https://pbs.twimg.com/media/C_TkecQXsAAkej5.jpg",
    desc: "Peace bro' !",
    color: "#EA913E",
    mood: "cool",
  },
  {
    name: "Edward",
    src: "https://images-ext-1.discordapp.net/external/fCHb5DN-gxtpuUJoBU6gCt0PkUo5HzsVweNwOFea5ZI/https/www.pngplay.com/wp-content/uploads/12/Edward-Elric-Free-Picture-PNG.png",
    desc: "Rien ne se perd rien ne se crée tout se transforme !",
    color: "#902043",
    mood: "cool",
  },
  {
    name: "Gutz",
    src: "https://static.fnac-static.com/multimedia/Images/FD/Comete/101155/CCP_IMG_1200x800/1298172.jpg",
    desc: "Bloodbath !!",
    color: "#9B3030",
    mood: "not cool",
  },
  {
    name: "Gally",
    src: "https://i.pinimg.com/736x/99/0f/d8/990fd808174291c901c27a727ccd7c20.jpg",
    desc: "Le métal c'est fantastique !",
    color: "#275CA2",
    mood: "cool",
  },
  {
    name: "Ryu",
    src: "https://comicvine.gamespot.com/a/uploads/scale_small/2/21084/382878-12909-ryuk.jpg",
    desc: "C'est quoi ton nom?, je vais le noter dans mon cahier.",
    color: "#A6A8AB",
    mood: "not cool",
  },
  {
    name: "Spike",
    src: "https://img10.reactor.cc/pics/post/Cowboy-Bebop-Anime-OldSchool-Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-6879531.jpeg",
    desc: "J'ai la dalle !!",
    color: "#fed766",
    mood: "cool",
  },
]

const logo =
  "https://img.freepik.com/vecteurs-libre/modele-logo-ninja-design-plat_23-2149008851.jpg?w=2000"

function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Header src={logo} />
      <Message />
      <Filter peoplesList={peoplesList} />
      <div className="card-container">
        {peoplesList.map((people) => (
          <Card key={people.name} peoplesList={people} />
        ))}
      </div>
    </>
  )
}

export default App
