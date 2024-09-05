import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import one from "/1.jpg";
import two from "/2.avif";
import three from "/3.avif";
import four from "/4.avif";
import five from "/5.avif";
import six from "/6.avif";
import seven from "/7.avif";
import eight from "/8.avif";
import nine from "/9.avif";
import ten from "/10.avif";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let photos = [one, two, three, four, five, six, seven, eight, nine, ten];

  return (
    <div>
      <img src={photos[Math.floor(Math.random() * 10)]} alt="" />
    </div>
  );
}

export default App;
