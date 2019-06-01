import React from 'react';
import '../styles/components/songDetail.css';
import Indicator from './indicator';
import Loading from './loading';
import { millisToMinutesAndSeconds, strLengthFormat } from '../utils';
import SongStats from './songStats';
import trophy from '../assets/trophy.png';
import stopwatch from '../assets/stopwatch.png';

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
						<div className="basicInfoHeader__title">
							{strLengthFormat(song.name)}
						</div>
						<div className="basicInfoHeader__artist">{song.artists}</div>
					</div>
					<div className="otherInfoHeader">
						<div className="rank">
							<img
								className="rank__image"
								alt="trophy indicator"
								src={trophy}
							/>
							<span className="rank__number">{song.rank}</span>
						</div>
						<div className="durationDetail">
							<img
								className="durationDetail__img"
								alt="timer icon"
								src={stopwatch}
							/>
							<span className="durationDetail__number">
								{millisToMinutesAndSeconds(song.duration_ms)}
							</span>
						</div>
					</div>
				</div>
				<SongStats className="songStats" song={song} />
			</div>
		);
	}
}

export default SongDetail;
