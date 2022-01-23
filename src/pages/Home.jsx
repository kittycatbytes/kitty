import React, { useState, useCallback, useEffect } from 'react';
import Canvas from "../components/homecanvas";
import ColorPicker from "../components/color-picker";

const Home = (props) => {
  const [colorPicked1, setColorPicked1] = useState("#85BBFD");
  const [colorPicked2, setColorPicked2] = useState("#1E6DCE");
  const [currentQuote, setQuote] = useState(`"Be kind whenever possible. It is always possible." —Dalai Lama`);
  var quotes = [
    `"I no doubt deserved my enemies, but I don't believe I deserved my friends." —Walt Whitman`,
    `"People do not seem to realize that their opinion of the world is also a confession of character." —Ralph Waldo Emerson`,
    `"Unlike physical progress, which is subject to natural restrictions, the qualities of the mind can be developed limitlessly." — Dalai Lama`,
    `"Without music, life would be a mistake." —Friedrich Nietzsche`,
    `"Every story I create, creates me. I write to create myself." —Octavia E. Butler`,
    `"We can't solve problems by using the same kind of thinking we used when we created them." —Albert Einstein`,
    `"It is not in the stars to hold our destiny but in ourselves." —William Shakespeare`,
    `"It's not what happens to you, but how you react to it that matters." —Epictetus`,
    `"One impulse from a vernal wood May teach you more of man, of moral evil and of good, than all the sages can." —William Wordsworth`,
    `"A kiss that is never tasted, is forever and ever wasted." —Billie Holiday`,
    `"He who knows, does not speak. He who speaks, does not know." —Lao Tzu`
  ];

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 10000);
    return () => clearInterval(intervalID);
  }, [shuffle]);


  localStorage.setItem('color1', colorPicked1);
  localStorage.setItem('color2', colorPicked2);

  const inputchangehandler1 = (color) => {
    console.log(color.hex);
    setColorPicked1(color.hex);
    console.log("iscolorset1:" + colorPicked1);
    localStorage.setItem('color1', colorPicked1);

  }
  const inputchangehandler2 = (color) => {
    console.log(color.hex);
    setColorPicked2(color.hex);
    console.log("iscolorset2:" + colorPicked2);
    localStorage.setItem('color2', colorPicked2);
  }

  return <div id="home">
    <Canvas canvasColor1={colorPicked1} canvasColor2={colorPicked2}></Canvas>
    <div id="contactCards" class="hidden">
      <img width="80px" height="80px" src="/images/IG.png"></img>
      <img width="80px" height="80px" src="/images/email.png"></img>
      <img width="80px" height="80px" src="/images/twitter.png"></img>
      <img width="80px" height="80px" src="/images/wordpress.png" alt="Ramblings"></img>
      <img width="80px" height="80px" src="/images/linkedin.png"></img>
      <div class="load-font bytes">abc</div>
    </div>
    <div id="quotes">{currentQuote}</div>
    <div id="colorPickers" >
      <div><ColorPicker onColorPickerClick={inputchangehandler1} color={colorPicked1}></ColorPicker></div>
      <div><ColorPicker onColorPickerClick={inputchangehandler2} color={colorPicked2}></ColorPicker></div>
    </div>
  </div>;
};

export default Home;