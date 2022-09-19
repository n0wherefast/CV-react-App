// import { Component } from "react";
import React from "react";
import "../index.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Overview = (props) =>{
     
          return (
               <div className="card"ref={ref} style={{ margin: "3rem" }}>
                    <div className="card-body">
                         <h1 className="card-title">{props.name}</h1>

                         <h4 className="card-text">{props.title}</h4>

                         <h6 className="card-subtitle mb-2 text-muted">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-envelope"
                                   viewBox="0 0 16 16"
                              >
                                   <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>{" "}
                              {props.email}
                         </h6>

                         <h6 className="card-subtitle mb-2 text-muted">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-phone-vibrate-fill"
                                   viewBox="0 0 16 16"
                              >
                                   <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM1.807 4.734a.5.5 0 1 0-.884-.468A7.967 7.967 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A6.967 6.967 0 0 1 1 8c0-1.18.292-2.292.807-3.266zm13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A7.967 7.967 0 0 0 16 8a7.967 7.967 0 0 0-.923-3.734zM3.34 6.182a.5.5 0 1 0-.93-.364A5.986 5.986 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A4.986 4.986 0 0 1 3 8c0-.642.12-1.255.34-1.818zm10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818 0 .642-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8c0-.769-.145-1.505-.41-2.182z" />
                              </svg>{" "}
                              {props.phone}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-geo-alt"
                                   viewBox="0 0 16 16"
                              >
                                   <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                   <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                              </svg>{" "}
                              {props.city}
                         </h6>
                         <h3 className="card-text">{props.about}</h3>
                        
                         <h2>Work Experience</h2>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.company}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.position}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              Start At:{props.start} End At:
                              {props.end}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.description}
                         </h6>
                         <h2>Education</h2>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.course}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.school}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.date}
                         </h6>
                         <h6 className="card-subtitle mb-2 text-muted">
                              {props.descriptionEdu}
                         </h6>
                         
                         <Pdf targetRef={ref} filename="CV.pdf">
                              {({toPdf}) =>  <button onClick={toPdf} className="btn btn-dark">Get PDF</button>}
                         </Pdf>
                         {/* <a href="#" className="card-link">Card link</a>
                                  <a href="#" className="card-link">Another link</a> */}
                    </div>
               </div>
          );
     
}
export default Overview;
