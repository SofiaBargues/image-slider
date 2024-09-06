import { useEffect, useState } from "react";
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
  const photos = [one, two, three, four, five, six, seven, eight, nine, ten];
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClickNext() {
    const length = photos.length;
    setIndex((index + 1) % length);
  }

  function handleClickPrev() {
    const length = photos.length;
    setIndex((index - 1 + length) % length);
  }

  function handleClickStop() {
    setIsPlaying(false);
  }

  function handleClickPlay() {
    setIsPlaying(true);
  }

  useEffect(() => {
    if (isPlaying) {
      const length = photos.length;
      const timeoutId = setTimeout(() => {
        setIndex((index + 1) % length);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isPlaying, index, photos.length]);

  return (
    <div>
      <img className="min-h-[800px]  " src={photos[index]} alt="" />
      <div className="flex gap-4">
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
        <button onClick={handleClickPlay}>Play</button>
        <button onClick={handleClickStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
