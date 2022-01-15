import React, { useState } from 'react';
import Canvas from "../components/homecanvas";
import ColorPicker from "../components/color-picker";

const Home = (props) => {
  const [colorPicked1, setColorPicked1] = useState("#85BBFD");
  const [colorPicked2, setColorPicked2] = useState("#1E6DCE");
  var self = this;

  const inputchangehandler1 = (color) => {
    console.log(color.hex);
    setColorPicked1(color.hex);
    console.log("iscolorset1:" + colorPicked1);
  }
  const inputchangehandler2 = (color) => {
    console.log(color.hex);
    setColorPicked2(color.hex);
    console.log("iscolorset2:" + colorPicked2);
  }

  return <div id="home">
    <Canvas canvasColor1={colorPicked1} canvasColor2={colorPicked2}></Canvas>
    <div id="contactCards" class="hidden">
      <img width="80px" height="80px" src="/images/IG.png"></img>
      <img width="80px" height="80px" src="/images/email.png"></img>
      <img width="80px" height="80px" src="/images/twitter.png"></img>
      <img width="80px" height="80px" src="/images/wordpress.png" alt="Ramblings"></img>
      <img width="80px" height="80px" src="/images/linkedin.png"></img>
      <div class="load-font graffiti">abc</div>
    </div>
    <div class="home-subtitle">(made with love using code and math)</div>
    <div id="colorPickers" >
     <div><ColorPicker onColorPickerClick={inputchangehandler1} color={colorPicked1}></ColorPicker></div>
      <div><ColorPicker onColorPickerClick={inputchangehandler2} color={colorPicked2}></ColorPicker></div>
     </div>
  </div>;
};

export default Home;