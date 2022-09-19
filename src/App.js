import React, { Component } from "react";
import Navbar from "./components/Nav";
import PersonalDetails from "./components/PersonaDetails";


class App extends Component {
    state ={
        value:''
   }
     render() {
          return (
               <>
                    <Navbar />
                    <PersonalDetails />
                               </>
          );
     }
    
}

export default App;
