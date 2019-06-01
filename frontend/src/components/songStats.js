import React from 'react';

function SongStats({ song }) {
	const total = [1000, 1, 10, 10, 10, 1, 1, 1, 1, 1, 0.005];
	return (
		<div className="songStats">
			<div className="statItem">
				<div className="statItemHeader">
					<div className="statTitle">Tempo</div>
					<div className="statValue">{song.tempo}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div
						className="valueStatBar"
						style={{ width: `${(song.tempo * 100) / total[0]}px` }}
					/>
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Energy</div>
					<div>{song.energy}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Key</div>
					<div>{song.key}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Loudness</div>
					<div>{song.loudness}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Mode</div>
					<div>{song.mode}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Speechiness</div>
					<div>{song.speechiness}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Acousticness </div>
					<div>{song.acousticness}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Valence</div>
					<div>{song.valence}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Danceability</div>
					<div>{song.danceability}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Liveness</div>
					<div>{song.liveness}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
			<div className="statItem">
				<div className="statItemHeader">
					<div>Instrumentalness</div>
					<div>{song.instrumentalness}</div>
				</div>
				<div className="statBar">
					<div className="defaultStatBar" />
					<div className="valueStatBar" />
				</div>
			</div>
		</div>
	);
}

export default SongStats;
