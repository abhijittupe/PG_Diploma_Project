import React from "react";
import Card from 'react-bootstrap/Card';
const ImageCard = () => {
  return (
    <Card className="ml-5 mr-5 mt-4">
      <Card.Body>
      <div className="card-body mt-3">
        <h2 className="text-center "> Popular Domestic Airlines</h2>
            <div className="row">
      <div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/6E.png"
          className="card-img-top"
          alt="Indigo Airlines"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Indigo Airlines</p>
        </div>
      </div>
      <div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/AI.png"
          className="card-img-top"
          alt="Air India"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Air India</p>
        </div>
      </div>
      <div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/IX.png"
          className="card-img-top"
          alt="Air India Express"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Air India Express</p>
        </div>
      </div>
      <div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/I5.png"
          className="card-img-top"
          alt="Air Asia India"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Air Asia India</p>
        </div>
      </div>
      <div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/UK.png"
          className="card-img-top"
          alt="Air India Express"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Vistara Airline</p>
        </div>
      </div><div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/SG.png"
          className="card-img-top"
          alt="Air India Express"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Spice Jet</p>
        </div>
      </div><div className="col-md-4 m-3" style={{ width: "150px" }}>
        <img
          src="https://images.ixigo.com/img/common-resources/airline-new/QP.png"
          className="card-img-top"
          alt="Air India Express"
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-text">Akasa Air</p>
        </div>
      </div>
            
    </div>
    </div>
      </Card.Body>
    </Card>
    
    
  );
};

export default ImageCard;
