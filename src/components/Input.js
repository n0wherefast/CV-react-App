import React from "react";



function Input (props) {

     return (
          <div className={props.classnamediv}>
               <label className={props.classnamelabel}>
               {props.head}
               </label>
               <input
                    type={props.type}
                    className={props.classnameInput}
                    placeholder={props.placeholder}
                   
                    onChange={props.change}
               />
          </div>
     );
};

export default Input
