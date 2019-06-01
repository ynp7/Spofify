import React from 'react';
import '../styles/components/songDetail.css';
import Indicator from './indicator';
import Loading from './loading';
import { millisToMinutesAndSeconds } from '../utils';
import SongStats from './songStats';

function SongDetail({ error, loading, song }) {
	if (error !== '') {
		return <Indicator text="Oops, something went wrong" />;
	} else if (loading === true) {
		return <Loading />;
	} else {
		return (
			<div className="songDetail">
				<div className="songHeader">
					<div className="basicInfoHeader">
						<div>{song.rank}</div>
						<div>{song.name}</div>
						<div>{song.artists}</div>
					</div>
					<div className="durationDetail">
						{millisToMinutesAndSeconds(song.duration_ms)}
					</div>
				</div>
				<SongStats className="songStats" song={song} />
			</div>
		);
	}
}

export default SongDetail;
