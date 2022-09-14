import Card from "./components/Card.js";
import Header from "./components/Header.js";
import React from "react";
import Data from "./Data.js";

let CardInfo = Data.map((data) => {
  return <Card data={data} />;
});

export default function App() {
  return (
    <div className="page-content">
      <Header />
      <div className="main-container">{CardInfo}</div>
    </div>
  );
}
