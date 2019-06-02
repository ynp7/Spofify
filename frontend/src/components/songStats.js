import React from 'react';
import '../styles/components/songStats.css';
import { textFormat } from '../utils';

function SongStats({ song }) {
	const total = [0, 0, 0, 1, 1, 11, 20, 10, 1, 1, 1, 1, 1, 200, 0, 10, 0];
	let i = -1;

	return (
		<div className="songStats">
			{Object.keys(song).map(key => {
				i++;
				if (total[i] !== 0) {
					return (
						<div className="statItem">
							<div className="statItemHeader">
								<div className="statTitle">{textFormat(key)}</div>
								<div className="statValue">{song[key]}</div>
							</div>
							<div className="statBar">
								<div className="defaultStatBar" />
								<div
									className="valueStatBar"
									style={{
										width: `${(Math.abs(song[key]) * 100) / total[i]}%`
									}}
								/>
							</div>
						</div>
					);
				} else {
					return <></>;
				}
			})}
		</div>
	);
}

export default SongStats;
