import React, { useState, useEffect, useRef } from 'react';
import "../CSS/Navbar.css";
import specialImg from '../img/specialImg.png';

const Navbar = ({ groupingOption, setGroupingOption, sortingOption, setSortingOption }) => {
  const [clicked, setClicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div className={`dropdown`} ref={dropdownRef}>
        <button className="dropbtn" onClick={handleClick}>
          <img src={specialImg} alt='SpecialImg'/> Display <i className="arrow-down"></i>
        </button>
        <div className={`dropdown-content ${clicked ? 'clicked' : ''}`}>
          <label>
            Grouping:
            <select
              value={groupingOption}
              onChange={(e) => setGroupingOption(e.target.value)}
              className='select'
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </label>

          <label>
            Ordering:
            <select
              value={sortingOption}
              onChange={(e) => setSortingOption(e.target.value)}
              className='select'
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;