import React from 'react';
import '../styles/components/empty.css';
import emptyIcon from '../assets/empty.png';

function Empty(props) {
	return (
		<div className="Empty">
			<img alt="describing there's no such data" src={emptyIcon} />
			<div className="empty-text">Song not found</div>
		</div>
	);
}

export default Empty;
