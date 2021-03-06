import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgSrc} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Kaine"
        imgSrc="https://horapiko.com/wp-content/uploads/2021/04/1619093476_299_NieR-Replicant-ver122474487139-Review-Attack-of-the-Fanboy.jpg"
        tel="+2122991836"
        mail="kaine@aerie.nier"
      />
      <Card
        name="Emil"
        imgSrc="data:image/jpeg;base64,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"
        tel="+212243325999"
        mail="emil@manor.nier"
      />

      <Card
        name="Yonah"
        imgSrc="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/04/Yonah-3.jpg"
        tel="+212299256444"
        mail="yonah@village.nier"
      />
    </div>
  );
}

export default App;
