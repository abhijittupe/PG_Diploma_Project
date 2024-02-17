import React from "react";
import plane from "../assets/images/travel1.jpg";
import Footer from "./Footer";
import Header from "./Header";
import FlightServiceRest from "../services/FlightServiceRest";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

class AddFlight extends React.Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem("user")) {
      alert("Please Login");
      this.props.history.push("/login");
    } else {
      if (JSON.parse(localStorage.getItem("user")).isadmin !== 1) {
        alert("Access Denied");
        this.props.history.push("/");
      }
    }

    this.service = new FlightServiceRest();
  }

  
  onSave = (values) => {
    const flight = { ...values };
    console.log(flight);
    this.service.saveFlight(flight);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "The flight has been added!",
    }).then(() => {
      this.props.history.push("/allFlights");
    });
  };

  render() {
    return (
      <div>
        <Header />

        <div className="container-fluid " style={styling.wrapper}>
          <Formik
            initialValues={{
              source: "",
              destination: "",
              travelDate: "",
              arrivalTime: "",
              departureTime: "",
              price: "",
              availableSeats: "",
            }}
            validationSchema={Yup.object().shape({
              source: Yup.string().required("Source is required"),
              destination: Yup.string().required("Destination is required"),
              travelDate: Yup.date().required("Travel Date is required"),
              arrivalTime: Yup.string().required("Arrival Time is required"),
              departureTime: Yup.string().required("Departure Time is required"),
              price: Yup.number()
                .typeError("Price must be a number")
                .required("Price is required"),
              availableSeats: Yup.number()
                .typeError("Available Seats must be a number")
                .required("Available Seats is required"),
            })}
            onSubmit={(values) => this.onSave(values)}
          >
            <Form className="m-auto mt-3 m-1 border bg-light border-dark p-3" style={styling.formStyle}>
              <h1 className="mb-3" style={styling.heading}>
                Add New Flight Schedule
              </h1>
              <div className="row">
              
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="source">Source</label>
                    <Field as="select" name="source" className="custom-select" >
                      <option value="" disabled selected>
                        Select Source
                      </option>
                      <option value="Chennai">Chennai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Goa">Goa</option>
                      <option value="Pune">Pune</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Cochin">Cochin</option>
                      <option value="Ahmadabad">Ahmadabad</option>
                    </Field>
                    <ErrorMessage name="source" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination">Destination</label>
                    <Field as="select" name="destination" className="custom-select" >
                      <option value="" disabled selected>
                        Select Destination
                      </option>
                      <option value="Chennai">Chennai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Goa">Goa</option>
                      <option value="Pune">Pune</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Cochin">Cochin</option>
                      <option value="Ahmadabad">Ahmadabad</option>
                    </Field>
                    <ErrorMessage name="destination" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelDate">Flying Date</label>
                    <Field type="date" name="travelDate" className="form-control" />
                    <ErrorMessage name="travelDate" component="div" className="text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="arrivalTime">Takeoff Time</label>
                    <Field type="time" name="arrivalTime" className="form-control"  />
                    <ErrorMessage name="arrivalTime" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="departureTime">Landing Time</label>
                    <Field type="time" name="departureTime" className="form-control"  />
                    <ErrorMessage name="departureTime" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Fare</label>
                    <Field type="number" name="price" className="form-control"  />
                    <ErrorMessage name="price" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="availableSeats">Available Seats</label>
                    <Field type="number" name="availableSeats" className="form-control"  />
                    <ErrorMessage name="availableSeats" component="div" className="text-danger" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning mr-4">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-outline-dark">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <Footer />
      </div>
    );
  }
}

let styling = {
  wrapper: {
    
    paddingTop: 100,
    paddingBottom: 100,
  },
  heading: {
    color: "#333333",
    textAlign: "center",
  },
  formStyle: {
    minWidth: 600,
    maxWidth: 600,
  },
};

export default AddFlight;
