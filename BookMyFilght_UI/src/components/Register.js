import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import UserService from "../services/UserService";
import planeBG from "../assets/images/planebg.jpg";
import Footer from "./Footer";
import Header from "./Header";
import { send } from "emailjs-com";

const RegisterSchema = Yup.object().shape({
  fname: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile Number is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  cpasswd: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
});

const Register = (props) => {
  const service = new UserService();

  const onMail = (values) => {
    let uname = "User Name :- " + values.username;
    let pwd = "Password :- " + values.password;

    let tosend = {
      from_name: "BookMyFlight.com",
      User_Name: uname,
      to_name: values.fname,
      Password: pwd,
      reply_to: values.email,
    };
    send("service_wuvmmta", "template_st10yk2", tosend, "d8gC2ydnwOI1lnZ1C")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User registered successfully and your details have been sent to your registered email Id!",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="pt-5">
      <Header />
      <div
        className="bg-info  py-5"
        style={{ backgroundImage: `url(${planeBG})`, overflow: "hidden", height: "1000px" }}
      >
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-6">
              <span>
                <b>Registration</b>
              </span>
            </h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 mx-auto ">
            <div className="card  ">
              <div className="card-header">
                <div className="text-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <div className="tab-content">
                    <div className="tab-pane fade show active pt-3">
                      <Formik
                        initialValues={{
                          fname: "",
                          email: "",
                          phone: "",
                          username: "",
                          password: "",
                          cpasswd: "",
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={(values) => {
                          onMail(values);
                          service
                            .addUser(values)
                            .then((response) => {
                              if (response.status === 200) {
                                console.log(response.data);
                                props.history.push("/login/");
                              }
                            })
                            .catch((error) => {
                              console.log(error);
                              alert("Registration failed");
                            });
                        }}
                      >
                        {({ values, isSubmitting, errors, touched, handleChange }) => (
                          <Form>
                            <div className="form-group">
                              <h6>
                                <span className="form-label ">Name</span>
                              </h6>
                              <Field
                                type="text"
                                name="fname"
                                placeholder="Enter Your Full Name"
                                className="form-control bg-info-subtle"
                              />
                              <ErrorMessage name="fname" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                              <h6>
                                <span className="form-label ">Email</span>
                              </h6>
                              <Field
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                              />
                              <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                              <h6>
                                <span className="form-label">Mobile Number</span>
                              </h6>
                              <Field
                                name="phone"
                                pattern="[6-9][0-9]{9}"
                                maxLength="10"
                                className="form-control"
                              />
                              <ErrorMessage name="phone" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                              <h6>
                                <span className="form-label">Username</span>
                              </h6>
                              <Field
                                type="text"
                                name="username"
                                placeholder="Enter Your UserName"
                                className="form-control"
                              />
                              <ErrorMessage name="username" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                              <h6>
                                <span className="form-label">Password</span>
                              </h6>
                              <Field
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className="form-control"
                              />
                              <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                              <h6>
                                <span className="form-label">Confirm Password</span>
                              </h6>
                              <Field
                                type="password"
                                name="cpasswd"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Confirm Password"
                              />
                              {errors.cpasswd && touched.cpasswd && (
                                <div className="text-danger">{errors.cpasswd}</div>
                              )}
                            </div>
                            <div className="card-footer">
                              <button
                                type="submit"
                                className="subscribe btn btn-light text-success btn-block shadow-sm"
                                // disabled={!values.cpasswd}
                              >
                                <h2>Register</h2>
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                  {/* ... Other JSX ... */}
				  <div classNameName="form-group" > 
				
                        <div ><Link className="card-link" to="/login"><button  type="button" className="btn  btn-link btn-block">Already registered? Login Now!</button></Link>  </div> 
                     </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Register;

