import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FlightList from "./FlightList";
import FlightServiceRest from "../services/FlightServiceRest";
import search from "../assets/logo/magnifying-glass.png";
import Card from "react-bootstrap/Card";

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.service = new FlightServiceRest();
    this.flag = false;
    this.state = {
      flights: [],
      searched: false,
    };
  }

  getFlightsList = (values) => {
    this.setState({
      searched: false,
    });
    const { source, destination, travelDate } = values;

    this.service.getFlightsForUser(source, destination, travelDate).then((data) => {
      if (data.length > 0) {
        this.setState({
          flights: data,
          searched: true,
        });
      } else {
        alert("No Flights Found!!");
      }
    });
  };

  render() {
    return (
      <Card className="mt-4 ml-3 mr-3">
        <Card.Body>
          <div className="container-fluid p-4 m-3">
            <h2>Search for flights</h2>
            <Formik
              initialValues={{
                source: "",
                destination: "",
                travelDate: "",
              }}
              validationSchema={Yup.object().shape({
                source: Yup.string().required("Source is required"),
                destination: Yup.string().required("Destination is required"),
                travelDate: Yup.date()
                  .min(new Date(), "Travel Date must be later")
                  .required("Travel Date is required"),
              })}
              onSubmit={(values) => this.getFlightsList(values)}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-inline">
                    <div className="input-group mb-2 mr-sm-2">
                      <Field
                        as="select"
                        className="custom-select my-1 mr-sm-2"
                        name="source" 
                      >
                        <option value="">Where from ?</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Goa">Goa</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur" >Jaipur</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Cochin">Cochin</option>
              <option value="Ahmadabad">Ahmadabad</option>
                      </Field>

                      {errors.source && touched.source && (
                        <div className="text-danger">{errors.source}</div>
                      )}
                    </div>

                    {/* Add similar code for the destination dropdown */}
                    <div className="input-group mb-2 mr-sm-2">
                      <Field
                        as="select"
                        className="custom-select my-1 mr-sm-2"
                        name="destination"
                        
                      >
                      
                        <option value="">Where to ?</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Goa">Goa</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur" >Jaipur</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Cochin">Cochin</option>
              <option value="Ahmadabad">Ahmadabad</option>
                      </Field>
                    {errors.destination && touched.destination && (
                        <div className="text-danger">{errors.destination}</div>
                      )}
                    </div>

                    <div className="input-group mb-2 mr-sm-2">
                      <Field
                        type="date"
                        className="my-1 p-2 border border-darken-2 rounded"
                        name="travelDate"
                        
                      />
                      {errors.travelDate && touched.travelDate && (
                        <div className="text-danger">{errors.travelDate}</div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn mb-2 mr-sm-2"
                      // style={styling.icon}
                    >
                      <button className="btn btn-outline-light text-light bg-primary" type="button">Search</button>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {this.state.searched && <FlightList flights={this.state.flights} />}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SearchFlight;





