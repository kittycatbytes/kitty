import Canvas from "../components/homecanvas";

const Home = () => {
  console.log("window height: " + window.innerHeight);
    return <div id="home">
      <Canvas></Canvas>
      <div id="contactCards" class="hidden">
      <img width="80px" height="80px" src="/images/IG.png"></img>
      <img width="80px" height="80px" src="/images/email.png"></img>
      <img width="80px" height="80px" src="/images/twitter.png"></img>
      <img width="80px" height="80px" src="/images/wordpress.png" alt="Ramblings"></img>
      <img width="80px" height="80px" src="/images/linkedin.png"></img>
            <div class="load-font graffiti">abc</div> 
            </div>
          <div class="home-subtitle">(made with love using code and math)</div>
    </div>;
  };
  
  export default Home;