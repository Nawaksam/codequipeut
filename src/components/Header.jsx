import "./Header.css"

const Header = ({ src }) => {
  return (
    <div className="header-container">
      <img className="logo" src={src} />
      <h1>Code qui peut / #CodeBakery</h1>
    </div>
  )
}

export default Header
