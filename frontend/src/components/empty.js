import React from 'react';
import '../styles/components/empty.css';

function Empty(props) {
	return (
		<div className="Empty">
			<div className="empty-img" />
			<div className="empty-text">Oops, Song not found</div>
		</div>
	);
}

export default Empty;
