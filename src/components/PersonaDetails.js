import { Component } from "react";
import React from "react";
import Overview from "./Overview";
import Input from "./Input";



class PersonalDetails extends Component {
     state = {
      personalDetails: [{id:0,head:'Name', type:'text',change:'name',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"jhon Doeman"},
                       {id:1,head:'Title', type:'text',change:'title',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"Software Developer"},
                       {id:2,head:'Email', type:'text',change:'email',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"doeman@gmail.com"},
                       {id:3,head:'Phone', type:'text',change:'phone',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"1234 5678"},
                       {id:4,head:'City', type:'text',change:'city',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"Los Angeles,CA"},
                       {id:5,head:'About Me', type:'textarea',change:'about',classnamelabel:'form-label',classnamediv:"col-12",classnameInput:"form-control",placeholder:"Enter your text here"},
                       ],
     workExperience : [{id:6,head:'Company', type:'text',change:'company',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"A Software Company"},
                       {id:7,head:'Position', type:'text',change:'position',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"Software Engineer"},
                       {id:8,head:'Start Date', type:'date',change:'start',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control"},
                       {id:9,head:'End Date', type:'date',change:'end',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control"},
                       {id:10,head:'Description', type:'text',change:'description',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"Enter here your description"},
                       ],

          education : [{id:11,head:'Course', type:'text',change:'course',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"Course"},
                       {id:12,head:'University', type:'text',change:'school',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control",placeholder:"Harvard University"},
                       {id:13,head:'Date', type:'date',change:'date',classnamelabel:'form-label',classnamediv:"col-md-6",classnameInput:"form-control", placeholder:"Enter here your description"},
                       {id:14,head:'Description', type:'text',change:'descriptionEdu',classnamelabel:'form-label',classnamediv:"col-12",classnameInput:"form-control"},
                       ],
          name: "",
          title: "",
          email: "",
          phone: "",
          city: "",
          about:"",
          company: "",
          position: "",
          start: "",
          end: "",
          description: "",
          course: "",
          school: "",
          date: "",
          descriptionEdu: "",
          postSubmitted: false
     };

     

     

     handleSubmit = (e) => {
          if(!this.state.name || !this.state.title || !this.state.email || !this.state.phone || !this.state.city){
               alert('Personal Details fields are required!')
              e.preventDefault(); 
          }else{
               this.setState({
                    postSubmitted:true 
               })
          }   
     };
     onChange = input => e => {
          this.setState({
               [input]:e.target.value
          });
     }
     
     handleAdd = () =>{
           const xx =[...this.state.workExperience,[]]
             this.setState(xx)             
        }

     render() {
          return (
               <>
                {!this.state.postSubmitted ?
              ( <div className="container" style={{ display: "flex" }}>
                    <div className="col" style={{ margin: "3rem" }}>
                         <form className="row g-3" onSubmit={this.handleSubmit}>
                              <h1 style={{ margin: "2rem" }}>
                                   Personal Details
                              </h1>


                              {this.state.personalDetails.map(input =>(
                                   <Input
                                   key={input.id}
                                   head={input.head}
                                   type={input.type}
                                   change={this.onChange(input.change)}
                                   classnamelabel={input.classnamelabel}
                                   classnamediv={input.classnamediv}
                                   classnameInput={input.classnameInput}
                                   placeholder={input.placeholder}

                                   />
                              ))}

                              

                              {/*///////////////// WORK EXP\\\\\\\\\\\\\\\\\\*/}

                           

                   
                               <h1 style={{ margin: "2rem" }}>
                                   Work Experience
                              </h1>

                              {this.state.workExperience.map(input =>(
                                   <Input
                                   key={input.id}
                                   head={input.head}
                                   type={input.type}
                                   change={this.onChange(input.change)}
                                   classnamelabel={input.classnamelabel}
                                   classnamediv={input.classnamediv}
                                   classnameInput={input.classnameInput}
                                   placeholder={input.placeholder}
                                   />
                                   
                              ))} 

                              {/* ////////////////// EDUCATION \\\\\\\\\\\\\\\\ */}

                              <h1 style={{ margin: "2rem" }}> Education</h1>

                              {this.state.education.map(input =>(
                                   <Input
                                   key={input.id}
                                   head={input.head}
                                   type={input.type}
                                   change={this.onChange(input.change)}
                                   classnamelabel={input.classnamelabel}
                                   classnamediv={input.classnamediv}
                                   classnameInput={input.classnameInput}
                                   placeholder={input.placeholder}

                                   />
                              ))}

                        <div className="d-grid gap-2 col-6 mx-auto">
                              <button
                                   onClick={this.handleSubmit}
                                   className="btn btn-primary btn-lg" >
                                   Submit
                              </button>
                         </div>
                         
                         </form>
                         
                         
                    </div>
                    
               </div>) :(<Overview
                         name={this.state.name}
                         title={this.state.title}
                         email={this.state.email}
                         phone={this.state.phone}
                         city={this.state.city}
                         about ={this.state.about}
                         company={this.state.company}
                         position={this.state.position}
                         start={this.state.start}
                         end={this.state.end}
                         description={this.state.description}
                         course={this.state.course}
                         school={this.state.school}
                         date={this.state.date}
                         descriptionEdu={this.state.descriptionEdu}
                    />)
     }
               </>
          );
     }
}
export default PersonalDetails;
