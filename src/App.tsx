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
  const photos = [
    one,
    two,
    three,
    //  four, five, six, seven, eight, nine, ten
  ];
  const [index, setIndex] = useState(0);

  function handleClickNext() {
    if (index < photos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div>
      <img src={photos[index]} alt="" />
      <div className="flex gap-4">
        {/* <button onClick={handleClickPrev}>Prev</button> */}
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
