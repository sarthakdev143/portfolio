import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main id="container">
      <div id="landing-div" className="landing-div">
        <h1 className="landing-heading">Who The Fuck is...</h1>
        <div id="img-div" className="img-div">
          <img id="image" src="" alt="Sarthak Parulekar" className="image" />
        </div>
      </div>
      <section id="name-row" className="name-row">
        <h1 className="name-heading">Sarthak Parulekar ?</h1>
        <h1 className="name-heading">Sarthak Parulekar ?</h1>
        <h1 className="name-heading">Sarthak Parulekar ?</h1>
        <h1 className="name-heading">Sarthak Parulekar ?</h1>
        <h1 className="name-heading">Sarthak Parulekar ?</h1>
      </section>
      
      <div id="bottom-space"></div>
    </main>
  );
};

export default MainContent;
