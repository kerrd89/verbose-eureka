import React from 'react';
import DeleteSvg from './DeleteSvg';

const Header = ({ onClick, displayForm }) => {
  return (
      <div className="App-header">
        <h1>People Who Done Me Wrong</h1>
        <button onClick={onClick}>
          {displayForm ?
            <svg width="30px" height="30px" viewBox="2 2 20 20">
              <path d="M13,7 L11,7 L11,11 L7,11 L7,13 L11,13 L11,17 L13,17 L13,13 L17,13 L17,11 L13,11 L13,7 L13,7 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 L12,20 Z" id="Shape" stroke="none" fillOpacity="1" fill="white" fillRule="evenodd"></path>
            </svg> : <DeleteSvg />
          }
        </button>
      </div>
  );
}

export default Header;









// <form>
// <input className="header-input"
// placeholder="Who are you?"
// />
// <button className="submit-user">
// <svg width="15px" height="20px" viewBox="4 1 16 22">
// <path d="M12,6 L12,9 L16,5 L12,1 L12,4 C7.58,4 4,7.58 4,12 C4,13.57 4.46,15.03 5.24,16.26 L6.7,14.8 C6.25,13.97 6,13.01 6,12 C6,8.69 8.69,6 12,6 L12,6 Z M18.76,7.74 L17.3,9.2 C17.74,10.04 18,10.99 18,12 C18,15.31 15.31,18 12,18 L12,15 L8,19 L12,23 L12,20 C16.42,20 20,16.42 20,12 C20,10.43 19.54,8.97 18.76,7.74 L18.76,7.74 Z" id="Shape" stroke="none" fillOpacity="1" fill="white" fillRule="evenodd"></path>
// </svg>
// </button>
// </form>
