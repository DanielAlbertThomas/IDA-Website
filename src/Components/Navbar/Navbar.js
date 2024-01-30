// import React, { Component } from "react";
// import "./Navbar.css";
// import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";

// class Navbar extends Component {
//   state = { 
//     clicked: false,
//     activeIndex: null // To track the index of the active dropdown
//   };

//   handleClick = (index) => {
//     this.setState((prevState) => ({
//       clicked: !prevState.clicked,
//       activeIndex: index === prevState.activeIndex ? null : index
//     }));
//   };

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <img src="IDA.svg" className="navbar-logo"></img>

//         <div className="menu-icons" onClick={this.handleClick}>
//           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>

//         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item.dropdown ? (
//                   <div className="dropdown">
//                     <Link 
//                       className={this.state.activeIndex === index ? "nav-links active" : "nav-links"} 
//                       onClick={() => this.handleClick(index)}
//                     >
//                       {item.title}
//                     </Link>
//                     {this.state.activeIndex === index && (
//                       <ul className="dropdown-menu">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link className={subItem.cName} to={subItem.url}>
//                               {subItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
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
import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
    activeIndex: null, // To track the index of the active dropdown
  };

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
        </ul>
      </nav>
    );
  }
}

export default Navbar;
