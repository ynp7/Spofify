import React from 'react';
import '../styles/components/statBar.css';

function StatBar({ song, songAttr, maxValue }) {
	return (
		<div className="statBar">
			<div className="defaultStatBar" />
			<div
				className="valueStatBar"
				style={{
					width: `${(Math.abs(song[songAttr]) * 100) / maxValue}%`
				}}
			/>
		</div>
	);
}

export default StatBar;
