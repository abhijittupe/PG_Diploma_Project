import React from "react";
import { Link, useHistory } from "react-router-dom";
import planeTicket from "../assets/logo/plane-ticket.png";
import Header from "./Header";
import Footer from "./Footer";

function Admin(props) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.isadmin === 0) {
    alert("Access Denied");
    history.push("/");
    return null;
  } else {
    return (
      <div style={{ paddingTop: 70 }}>
        <Header />
        <div className="container-fluid mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top mx-auto mt-3 w-50"
                  src="https://cdn-icons-png.flaticon.com/512/6008/6008941.png"
                  alt="admin"
                />
                <div className="card-body">
                  <h5 className="card-title">Welcome Admin</h5>
                  <p className="card-text">
                    "Unlock the skies and soar to new heights with our website's exhilarating flight simulation feature!"
                  </p>
                  <p>You can Add schedules for Flights, Modify and Delete Schedules.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link className="btn btn-primary btn-block" to="/addFlight">
                      Add Flights
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top mx-auto mt-3 w-50"
                  src="https://cdn-icons-png.flaticon.com/512/186/186723.png"
                  alt="admin"
                />
                <div className="card-body">
                  <h5 className="card-title">Welcome Captain Admin</h5>
                  <p className="card-text">
                    "Embark on thrilling airborne adventures with our website's all-inclusive flight simulations in just one line!"
                  </p>
                  <p>You can View All flights Shedules and Modify and Delete Schedules.</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Link className="btn btn-success btn-block" to="/allFlights" >
                      All Flights
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top mx-auto mt-3 w-50"
                  src="https://cdn-icons-png.flaticon.com/512/713/713361.png"
                  alt="admin"
                />
                <div className="card-body">
                  <h5 className="card-title">Welcome</h5>
                  <p className="card-text">
                    
                    "Access your User List effortlessly with a single click on our website."
                  </p>
                  <p>You Can View All User List register on your website from Here easily. </p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Link className="btn btn-info btn-block" to="/userlist">
                      User List
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Admin;
