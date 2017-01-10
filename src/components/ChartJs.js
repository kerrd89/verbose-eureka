import React from 'react';
import {Doughnut} from 'react-chartjs-2';


const Chart = ({ dataset }) => {
  const data = {
	labels: [
		'Forgiven',
		'Still Grudging'
	],
	datasets: [{
		data: dataset,
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		]
	}]
};
  return (
    <div className="doughnut">
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;









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
