// import React, { Component } from 'react';
// import amex from '../assets/images/amex.png';
// import visa from '../assets/images/visa.png';
// import mastercard from '../assets/images/mastercard.png';
// import BookingService from '../services/BookingService';
// import { withRouter } from "react-router";
// import planeBG from "../assets/images/planebg1.jpg";
// import Footer from './Footer';
// import Header from './Header';


// class Payment extends Component {
    
//     constructor(props){
//         super(props)
//         if(!localStorage.getItem('user')){this.props.history.push('/login')}
//         else{
//         this.service = new BookingService();
//         this.state={
//             ticketNumber:0,
//             booking_date:0,
//             total_pay:0,
//             name:''
//         }
//     }
//     }

//     /**
//      * this method interacts with service to generate ticket for user
//      * redirects to Ticket Component
//      */
//     createTicket = () => {
//         console.log(this.state.name)
//         this.service.generateTicket(this.state).then(response => {
//             console.log(response.data)
//             if(response.status===200)
            
//                 this.props.history.push('/ticket')
//         })
        
            
//     } 

   
    
    
//     render(){
        
//         if(!localStorage.getItem('user')){return null}
//     return (
        
//         <div class='pt-5'>
//         <Header />
//         <div class="py-5" style={{overflow: 'hidden', height: 'auto'}}>
//             <div className="row mb-4">
// 					<div className="col-lg-8 mx-auto text-center">
// 					{/* <h1 className="display-6">Book My Flight</h1> */}
// 					</div>
// 			</div>
//             <div className="row">
// 				 <div className="col-md-6 mx-auto">
// 					<div className="card ">
// 					   <div className="card-header">
//                            <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">


//                            <div className="tab-content">
//                                 <div className="tab-pane fade show active pt-3">
//                                     <div className="container">
//                                         <h4 align="center">Confirm Payment</h4>
//                                         <br/>

//                                 <div className="row">
//                                         <div className="col-md-6">
//                                              <span><h6>CREDIT/DEBIT CARD</h6></span> 
//                                         </div>
//                                          <div className="col-lg-6 text-right" style={{marginTop: "-5px"  }} >
//                                          {/* style="margin-top: -5px; */}
//                                              <img src={visa} alt="visa card "/> 
//                                              <img src={mastercard} alt="mastercard"/>
//                                              <img src={amex} alt="amex card"/> 
//                                         </div> 
                                        
//                                 </div>
//                                 <br></br>
//                                 <form>
//                                 <div className="form-group">
//                                         <label for="cc-number" className="control-label">CARD NUMBER</label> 
//                                         <input  name="cnumber"  type="mobile" className="form-control" placeholder="•••• •••• •••• ••••" pattern="[0-9]{16}" /> 
//                                 </div>
                                
//                                 <br></br>

//                                 <div className="row">
//                                         <div className="col-md-6">
//                                             <div className="form-group"> 
//                                             <label for="cc-exp" className="control-label">CARD EXPIRY</label>
//                                             <input id="cc-exp" type="month" className="form-control"  required="required"/>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <div className="form-group"> <label for="cc-cvc" className="control-label">CARD CVV</label>
//                                             <input name="cvc" type="mobile" className="form-control" placeholder="•••" pattern="[0-9]" required /> 
//                                             </div>
//                                         </div>
//                                 </div>
                                
//                                 <br></br>
//                                 <div className="form-group"> 
//                                         <label for="holder-name" className="control-label">CARD HOLDER NAME</label> 
//                                         <input name="cname" type="text" className="form-control" pattern="[A-Za-z]{4,}" required="require" />
//                                 </div>
                                
//                                 <br></br>
                               
                        
//                                 <div className="card-footer"> 
//                                    <div className="col-md-12 text-center">
                                      
//                                    <button type="submit" onClick={this.createTicket} className="subscribe btn btn-primary btn-block shadow-sm"> Make Payment </button>
//                                     </div> 
//                                 </div>
//                                 </form>
//                                              </div>
//                                          </div>
//                                    </div>                           
//                             </div>
//                        </div>
//                    </div>
//                 </div>
//             </div>           
                 
//         </div >
        
// 		</div>
//          );
//     }
// }

// export default withRouter(Payment);


import React, { Component } from 'react';
import amex from '../assets/images/amex.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import BookingService from '../services/BookingService';
import { withRouter } from 'react-router';
import planeBG from '../assets/images/planebg1.jpg';
import Footer from './Footer';
import Header from './Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

class Payment extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('user')) {
      this.props.history.push('/login');
    } else {
      this.service = new BookingService();
      this.state = {
        ticketNumber: 0,
        booking_date: 0,
        total_pay: 0,
        name: '',
      };
    }
  }

  createTicket = (values) => {
    console.log(values.name);
    this.service.generateTicket(values).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        this.props.history.push('/ticket');
      }
    });
  };

  render() {
    if (!localStorage.getItem('user')) {
      return null;
    }

    return (
      <div className="pt-5">
        <Header />
        <div className="py-5" style={{ overflow: 'hidden', height: 'auto' }}>
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center"></div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card ">
                <div className="card-header">
                  <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                    <div className="tab-content">
                      <div className="tab-pane fade show active pt-3">
                        <div className="container">
                          <h4 align="center">Confirm Payment</h4>
                          <br />
                          <div className="row">
                            <div className="col-md-6">
                              <span>
                                <h6>CREDIT/DEBIT CARD</h6>
                              </span>
                            </div>
                            <div className="col-lg-6 text-right" style={{ marginTop: '-5px' }}>
                              <img src={visa} alt="visa card " />
                              <img src={mastercard} alt="mastercard" />
                              <img src={amex} alt="amex card" />
                            </div>
                          </div>
                          <br></br>
                          <Formik
                            initialValues={{
                              cnumber: '',
                              exp: '',
                              cvc: '',
                              name: '',
                            }}
                            validationSchema={Yup.object().shape({
                              cnumber: Yup.string().length(16, 'Card number must be 16 digits').required('Required'),
                              exp: Yup.string().required('Required'),
                              cvc: Yup.string().length(3, 'CVC must be 3 digits').required('Required'),
                              name: Yup.string().required('Required'),
                            })}
                            onSubmit={(values) => {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: 'You are about to make a payment!',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, make the payment!',
                                cancelButtonText: 'No, cancel!',
                                reverseButtons: true,
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  this.createTicket(values);
                                } else if (result.dismiss === Swal.DismissReason.cancel) {
                                  Swal.fire('Cancelled', 'Payment process was canceled :)', 'error');
                                }
                              });
                            }}
                          >
                            {({ errors, touched }) => (
                              <Form>
                                <div className="form-group">
                                  <label htmlFor="cc-number" className="control-label">
                                    CARD NUMBER
                                  </label>
                                  <Field name="cnumber" type="text" className={`form-control ${errors.cnumber && touched.cnumber ? 'is-invalid' : ''}`} placeholder="•••• •••• •••• ••••" />
                                  <ErrorMessage name="cnumber" component="div" className="invalid-feedback" />
                                </div>

                                <br></br>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="cc-exp" className="control-label">
                                        CARD EXPIRY
                                      </label>
                                      <Field name="exp" type="month" className={`form-control ${errors.exp && touched.exp ? 'is-invalid' : ''}`}  />
                                      <ErrorMessage name="exp" component="div" className="invalid-feedback" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="cc-cvc" className="control-label">
                                        CARD CVV
                                      </label>
                                      <Field name="cvc" type="text" className={`form-control ${errors.cvc && touched.cvc ? 'is-invalid' : ''}`} placeholder="•••" />
                                      <ErrorMessage name="cvc" component="div" className="invalid-feedback" />
                                    </div>
                                  </div>
                                </div>

                                <br></br>
                                <div className="form-group">
                                  <label htmlFor="holder-name" className="control-label">
                                    CARD HOLDER NAME
                                  </label>
                                  <Field name="name" type="text" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} placeholder="Enter CardHolder name" />
                                  <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                </div>

                                <br></br>

                                <div className="card-footer">
                                  <div className="col-md-12 text-center">
                                    <button type="submit" className="subscribe btn btn-primary btn-block shadow-sm">
                                      Make Payment
                                    </button>
                                  </div>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Payment);
