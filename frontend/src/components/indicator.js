import React from 'react';
import '../styles/components/indicator.css';

function Indicator({ text }) {
	return (
		<div className="Indicator">
			<div className="indicator-img" />
			<div className="indicator-text">{text}</div>
		</div>
	);
}

export default Indicator;
