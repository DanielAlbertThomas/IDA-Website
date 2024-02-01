// Dropdown.js
import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, dropdownItems, active, handleClick }) => {
  return (
    <div className="dropdown">
      <Link
        className={active ? "nav-links active" : "nav-links"}
        onClick={handleClick}
      >
        {title}
      </Link>
      {active && (
        <ul className="dropdown-menu">
          {dropdownItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link className={subItem.cName} to={subItem.url}>
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
