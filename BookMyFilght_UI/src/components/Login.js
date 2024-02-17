// import React, { Component } from "react";
// import UserService from "../services/UserService";
// import planeBG from "../assets/images/planebg.jpg";
// import Footer from "./Footer";
// import Header from "./Header";
// import { Link } from "react-router-dom";


// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.service = new UserService();
//     this.state = {
//       username: "",
//       password: "",
//       errormsg: "",
//       flag: false,
//       btn: false,
//       isAdmin: 0,
//     };
//   }
//   validateUser = () => {
//     if (this.state.username !== "" && this.state.password !== "") {
//       this.service
//         .validateUser(this.state.username, this.state.password)
//         .then((response) => {
//           if (response.status === 200) {
//             localStorage.setItem("user", JSON.stringify(response.data));
//             if (response.data.isadmin === 0)
//               this.props.history.push("/booking");
//             else this.props.history.push("/admin");
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//           this.setState({
//             errormsg: "Invalid username or password.",
//             password: "",
//             flag: true,
//           });
//         });
//     } else {
//       alert("All fields are required");
//     }
//   };

//   render() {
//     return (
//       <div class="pt-5">
//         <Header />
//         <div
//           class="py-5"
//           style={{
//             backgroundImage: `url(${planeBG})`,
//             overflow: "hidden",
//             height: "auto",
//           }}
//         >
//           <div class="row mb-4">
//             <div class="col-lg-8 mx-auto text-center">
//               <h1
//                 class="display-3"
                
//               >
//                 Login
//               </h1>
//             </div>
//           </div>

//           <div class="row">
//             <div class="col c  col-md-6  mx-auto">
//               <div class="card " style={{ width: "700px" }}>
//                 <div class="card-header">
//                   <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
//                     <div
//                       class=" text-white tab-content"
                      
//                     >
//                       <div class="tab-pane fade show active pt-3">
//                         <form>
//                           <div class="form-group">
//                             <h6>
//                               <span class="form-label">Username</span>
//                             </h6>
//                             <input
//                               type="text"
//                               name="username"
//                               value={this.state.username}
//                               placeholder="Enter Your Username"
//                               onChange={(e) =>
//                                 this.setState({ username: e.target.value })
//                               }
//                               class="form-control"
                              
//                             />
//                           </div>
//                           <div class="form-group">
//                             <h6>
//                               <span class="form-label">Password</span>
//                             </h6>
//                             <input
//                               type="password"
//                               name="password"
//                               value={this.state.password}
//                              placeholder="Enter Your Password"
//                               onChange={(e) =>
//                                 this.setState({
//                                   password: e.target.value,
//                                   flag: false,
//                                   btn: true,
//                                 })
//                               }
//                               class="form-control"
                              
//                             />
//                           </div>

//                           <div class="card-footer">
//                             {" "}
//                             <button
//                               type="button"
//                               disabled={!this.state.btn}
//                               onClick={this.validateUser}
//                               class="subscribe btn btn-primary btn-block shadow-sm"
//                             >
//                               Login
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                       <br />
//                       {this.state.flag && (
//                         <div
//                           style={{ textAlign: "center" }}
//                           className="alert alert-danger"
//                         >
//                           {" "}
//                           {this.state.errormsg}{" "}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div classNameName="form-group">
//                     <div>
//                       <Link className="card-link" to="/register">
//                         <button
//                           type="button"
//                           className="btn  btn-link btn-block"
//                         >
//                           New User? Register Now!
//                         </button>
//                       </Link>{" "}
//                     </div>
//                   </div>
//                   <div classNameName="form-group">
//                     <div>
//                       <Link className="card-link" to="/forgotPassword">
//                         <button
//                           type="button"
//                           className="btn  btn-link btn-block"
//                         >
//                           Forgot-Password
//                         </button>
//                       </Link>{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>     
//       </div>
//     );
//   }
// }


import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import UserService from "../services/UserService";
import planeBG from "../assets/images/planebg.jpg";
import Footer from "./Footer";
import Header from "./Header";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = (props) => {
  const service = new UserService();

  const handleSubmit = (values) => {
    service
      .validateUser(values.username, values.password)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          if (response.data.isadmin === 0) props.history.push("/booking");
          else props.history.push("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid username or password.",
        });
      });
  };

  return (
    <div className="pt-5">
      <Header />
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${planeBG})`,
          overflow: "hidden",
          height: "auto",
        }}
      >
        <div className="row ">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-3">Login</h1>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col c col-md-6  mx-auto">
            <div className="card " style={{ width: "700px" }}>
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <div className="text-white tab-content">
                    <div className="tab-pane fade show active pt-3">
                      <Formik
                        initialValues={{
                          username: "",
                          password: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <div className="form-group">
                              <h6>
                                <span className="form-label">Username</span>
                              </h6>
                              <Field
                                type="text"
                                name="username"
                                placeholder="Enter Your Username"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="text-danger"
                              />
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
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                              />
                            </div>

                            <div className="card-footer">
                              <button
                                type="submit"
                                className="subscribe btn btn-primary btn-block shadow-sm"
                                // disabled={isSubmitting}
                              >
                                Login
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <Link className="card-link" to="/register">
                      <button type="button" className="btn btn-link btn-block">
                        New User? Register Now!
                      </button>
                    </Link>{" "}
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <Link className="card-link" to="/forgotPassword">
                      <button type="button" className="btn btn-link btn-block">
                        Forgot-Password
                      </button>
                    </Link>{" "}
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

export default Login;
