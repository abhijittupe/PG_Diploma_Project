import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchFlight from "./SearchFlight";

import g4 from "../assets/images/g4.jpeg";
import g2 from "../assets/images/g2.jpeg";
import g1 from "../assets/images/g1.jpeg";
import g3 from "../assets/images/g3.jpeg";
import Corousal from "./Corousal";



const features = [
  {
    image: "https://img.freepik.com/premium-vector/travel_23-2148034719.jpg?w=2000",
    feature: "Memorable Travel",
  },
  {
    image: "https://img.freepik.com/premium-vector/immunity-treatment-covid19_317810-3403.jpg",
    feature: "COVID-19 Safety",
  },
  {
    image: "https://media.istockphoto.com/id/168725872/photo/on-the-airplane.jpg?s=612x612&w=0&k=20&c=9mTe5zv4xNxol1KU50xVB3y0E3mrz6eMiJ3LJgoyCQc=",
    feature: "Service at its best",
  },
  {
    image: "https://www.citypng.com/public/uploads/preview/vector-airline-ticket-icon-png-11663774956vltjj2ptim.png",
    feature: "Easy and Convinient Booking",
  },
];

function Home(props) {
  
  const featureCard = features.map((f) => {
    return (
      <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
        <div className="card">
          <img className="card-img-top" src={f.image} style={{width:"325px", height:"250px"}} alt="feature1" />
          <div className="card-body" style={styling.card}>
            <h5 className="card-title">{f.feature}</h5>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />

      <main className="mb-4 mt-5">
        {/* <!-- Corousal section --> */}
        <section>
          <Corousal />
        </section>

        <section style={styling.section_bg}>
          <SearchFlight />
        </section>

        <section
          className="container-fluid  pt-3 pb-5 section-bg"
          style={styling.section_bg}
        >
          <h2 style={styling.subheading}>Why BookMyFlight.com ?</h2>
          <div className="m-auto row">{featureCard}</div>
        </section>
      </main>

     
    </div>
  );
}

let styling = {
  subheading: {
    textAlign: "center",
    color: "#333333",
    fontFamily: "Verdana",
    padding: 20,
  },
  // section_bg: {
  //   background: "linear-gradient(180deg, transparent, #6666ff)",
  // },
  card: {
    background: "#00001a",
    color: "white",
    
  },
};

export default Home;
