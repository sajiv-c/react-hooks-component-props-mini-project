import react from "react";
import reactDom from "react-dom";

function Header({name}) {
    return (
      <header>
        <h1>{name}</h1>
      </header>
    )
}

export default Header;