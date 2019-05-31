import React from 'react';
import '../styles/components/songDetail.css';
import Indicator from './indicator';
import Loading from './loading';

function SongDetail({ error, loading, song }) {
	if (error !== '') {
		return <Indicator text="Oops, something went wrong" />;
	} else if (loading === true) {
		return <Loading />;
	} else {
		return (
			<>
				<div>Details of the song here</div>
				<div>Name {song.name}</div>
				<div>Artists {song.artists}</div>
				<div>Duration {song.duration_ms}</div>
				<div>Rank {song.rank}</div>
				<div>Tempo {song.tempo}</div>
				<div>Energy {song.energy}</div>
			</>
		);
	}
}

export default SongDetail;
