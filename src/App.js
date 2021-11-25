import { useEffect } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  useEffect(() => {
    const container = document.querySelector(".container");
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("active");
    });
    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("active");
    });
    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);



  return (
    <div className="App">
      <div className="main">
        <div className="container" id="container">{Array(30).fill(<Item />)}</div>
      </div>
      <button onClick={() => document.getElementById('container').scrollBy(-300,0)}>Left</button>
      <button onClick={() => document.getElementById('container').scrollBy(300,0)}>Right</button>
    </div>
  );
}

export default App;
