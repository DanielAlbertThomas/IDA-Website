import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {z
  state = {
    clicked: false,
    activeIndex: null, // To track the index of the active dropdown
  };

  // handleClick = (index) => {
  //   this.setState((prevState) => ({
  //     clicked: !prevState.clicked,
  //     activeIndex: index === prevState.activeIndex ? null : index,
  //   }));
  // };

  handleClick = (index) => {
  this.setState((prevState) => ({
    clicked: !prevState.clicked,
    activeIndex: index === prevState.activeIndex ? null : index,
  }));
};


  render() {
    return (
      <nav className="NavbarItems">
        <img src="IDA.svg" className="navbar-logo" alt="Logo" />

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {item.dropdown ? (
                  <div className="dropdown">
                    <Link
                      className={
                        this.state.activeIndex === index
                          ? "nav-links active"
                          : "nav-links"
                      }
                      onClick={() => this.handleClick(index)}
                    >
                      {item.title}
                      <i className="fas fa-caret-down"></i>
                    </Link>
                    {this.state.activeIndex === index && (
                      <ul className="dropdown-menu">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link className={subItem.cName} to={subItem.url}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul> */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
  {MenuItems.map((item, index) => {
    return (
      <li key={index}>
        {item.dropdown ? (
          <div className="dropdown">
            <Link
              className={
                this.state.activeIndex === index
                  ? "nav-links active"
                  : "nav-links"
              }
              onClick={() => this.handleClick(index)}
            >
              {item.title}
              {/* Add dropdown arrow */}
              <i className="fas fa-caret-down"></i>
            </Link>
            {/* Add the active class to apply sliding effect */}
            <ul className={this.state.activeIndex === index ? "dropdown-menu active" : "dropdown-menu"}>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link className={subItem.cName} to={subItem.url}>
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Link className={item.cName} to={item.url}>
            {item.title}
          </Link>
        )}
      </li>
    );
  })}
</ul>

      </nav>
    );
  }
}

export default Navbar;


// // import React, { Component } from "react";
// // import "./Navbar.css";
// // import { MenuItems } from "./MenuItems";
// // import { Link } from "react-router-dom";

// // class Navbar extends Component {
// //   state = { 
// //     clicked: false,
// //     activeIndex: null // To track the index of the active dropdown
// //   };

// //   handleClick = (index) => {
// //     this.setState((prevState) => ({
// //       clicked: !prevState.clicked,
// //       activeIndex: index === prevState.activeIndex ? null : index
// //     }));
// //   };

// //   render() {
// //     return (
// //       <nav className="NavbarItems">
// //         <img src="IDA.svg" className="navbar-logo"></img>

// //         <div className="menu-icons" onClick={this.handleClick}>
// //           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
// //         </div>

// //         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
// //           {MenuItems.map((item, index) => {
// //             return (
// //               <li key={index}>
// //                 {item.dropdown ? (
// //                   <div className="dropdown">
// //                     <Link 
// //                       className={this.state.activeIndex === index ? "nav-links active" : "nav-links"} 
// //                       onClick={() => this.handleClick(index)}
// //                     >
// //                       {item.title}
// //                     </Link>
// //                     {this.state.activeIndex === index && (
// //                       <ul className="dropdown-menu">
// //                         {item.dropdown.map((subItem, subIndex) => (
// //                           <li key={subIndex}>
// //                             <Link className={subItem.cName} to={subItem.url}>
// //                               {subItem.title}
// //                             </Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     )}
// //                   </div>
// //                 ) : (
// //                   <Link className={item.cName} to={item.url}>
// //                     {item.title}
// //                   </Link>
// //                 )}
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }

// // export default Navbar;
// // import React, { Component } from "react";
// // import "./Navbar.css";
// // import { MenuItems } from "./MenuItems";
// // import { Link } from "react-router-dom";

// // class Navbar extends Component {
// //   state = {
// //     clicked: false,
// //     activeIndex: null, // To track the index of the active dropdown
// //   };

// //   handleClick = (index) => {
// //     this.setState((prevState) => ({
// //       clicked: !prevState.clicked,
// //       activeIndex: index === prevState.activeIndex ? null : index,
// //     }));
// //   };

// //   render() {
// //     return (
// //       <nav className="NavbarItems">
// //         <img src="IDA.svg" className="navbar-logo" alt="Logo" />

// //         <div className="menu-icons" onClick={this.handleClick}>
// //           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
// //         </div>

// //         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
// //           {MenuItems.map((item, index) => {
// //             return (
// //               <li key={index}>
// //                 {item.dropdown ? (
// //                   <div className="dropdown">
// //                     <Link
// //                       className={
// //                         this.state.activeIndex === index
// //                           ? "nav-links active"
// //                           : "nav-links"
// //                       }
// //                       onClick={() => this.handleClick(index)}
// //                     >
// //                       {item.title}
// //                       {/* Add dropdown arrow */}
// //                       <i className="fas fa-caret-down"></i>
// //                     </Link>
// //                     {this.state.activeIndex === index && (
// //                       <ul className="dropdown-menu">
// //                         {item.dropdown.map((subItem, subIndex) => (
// //                           <li key={subIndex}>
// //                             <Link className={subItem.cName} to={subItem.url}>
// //                               {subItem.title}
// //                             </Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     )}
// //                   </div>
// //                 ) : (
// //                   <Link className={item.cName} to={item.url}>
// //                     {item.title}
// //                   </Link>
// //                 )}
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }

// // export default Navbar;



// // import React, { Component } from "react";
// // import "./Navbar.css";
// // import { MenuItems } from "./MenuItems";
// // import { Link } from "react-router-dom";

// // class Navbar extends Component {
// //   state = {
// //     clicked: false,
// //     activeIndex: null, // To track the index of the active dropdown
// //   };

// //   handleClick = (index) => {
// //     this.setState((prevState) => ({
// //       clicked: !prevState.clicked,
// //       activeIndex: index === prevState.activeIndex ? null : index,
// //     }));
// //   };

// //   render() {
// //     return (
// //       <nav className="NavbarItems">
// //         <img src="IDA.svg" className="navbar-logo" alt="Logo" />

// //         <div className="menu-icons" onClick={this.handleClick}>
// //           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
// //         </div>

// //         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
// //           {MenuItems.map((item, index) => {
// //             return (
// //               <li key={index}>
// //                 {item.dropdown ? (
// //                   <div className="dropdown">
// //                     <Link
// //                       className={
// //                         this.state.activeIndex === index
// //                           ? "nav-links active"
// //                           : "nav-links"
// //                       }
// //                       onClick={() => this.handleClick(index)}
// //                     >
// //                       {item.title}
// //                       {/* Add dropdown arrow */}
// //                       <i className="fas fa-caret-down"></i>
// //                     </Link>
// //                     {this.state.activeIndex === index && (
// //                       <ul className="dropdown-menu" style={{ width: "150px" }}>
// //                         {item.dropdown.map((subItem, subIndex) => (
// //                           <li key={subIndex}>
// //                             <Link
// //                               className={subItem.cName}
// //                               to={subItem.url}
// //                               style={{ padding: "10px 20px" }}
// //                             >
// //                               {subItem.title}
// //                             </Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     )}
// //                   </div>
// //                 ) : (
// //                   <Link className={item.cName} to={item.url}>
// //                     {item.title}
// //                   </Link>
// //                 )}
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }

// // export default Navbar;



// // import React, { Component } from "react";
// // import "./Navbar.css";
// // import { MenuItems } from "./MenuItems";
// // import { Link } from "react-router-dom";

// // class Navbar extends Component {
// //   state = {
// //     clicked: false,
// //     activeIndex: null // To track the index of the active dropdown
// //   };

// //   handleClick = (index) => {
// //     this.setState((prevState) => ({
// //       clicked: !prevState.clicked,
// //       activeIndex: index === prevState.activeIndex ? null : index
// //     }));
// //   };

// //   render() {
// //     return (
// //       <nav className="NavbarItems">
// //         <img src="IDA.svg" className="navbar-logo"></img>

// //         <div className="menu-icons" onClick={this.handleClick}>
// //           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
// //         </div>

// //         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
// //           {MenuItems.map((item, index) => {
// //             return (
// //               <li key={index}>
// //                 {item.dropdown ? (
// //                   <div className="dropdown">
// //                     <Link
// //                       className={this.state.activeIndex === index ? "nav-links active" : "nav-links"}
// //                       onClick={() => this.handleClick(index)}
// //                     >
// //                       {item.title}
// //                     </Link>
// //                     {this.state.activeIndex === index && (
// //                       <ul className="dropdown-menu">
// //                         {item.dropdown.map((subItem, subIndex) => (
// //                           <li key={subIndex}>
// //                             <Link className={subItem.cName} to={subItem.url}>
// //                               {subItem.title}
// //                             </Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     )}
// //                   </div>
// //                 ) : (
// //                   <Link className={item.cName} to={item.url}>
// //                     {item.title}
// //                   </Link>
// //                 )}
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }

// // export default Navbar;


// // Navbar.js
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown"; // Import the Dropdown component
// import { MenuItems } from "./MenuItems";
// import "./Navbar.css";

// class Navbar extends Component {
//   state = {
//     clicked: false,
//     activeIndex: null, // To track the index of the active dropdown
//   };

//   handleClick = (index) => {
//     this.setState((prevState) => ({
//       clicked: !prevState.clicked,
//       activeIndex: index === prevState.activeIndex ? null : index,
//     }));
//   };

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <img src="IDA.svg" className="navbar-logo" alt="Logo"></img>

//         <div className="menu-icons" onClick={() => this.handleClick(null)}>
//           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>

//         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item.dropdown ? (
//                   <Dropdown
//                     title={item.title}
//                     dropdownItems={item.dropdown}
//                     active={this.state.activeIndex === index}
//                     handleClick={() => this.handleClick(index)}
//                   />
//                 ) : (
//                   <Link className={item.cName} to={item.url}>
//                     {item.title}
//                   </Link>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
