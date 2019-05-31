import React from 'react';
import '../styles/components/songDetail.css';
import Errors from './errors';
import Loading from './loading';

function SongDetail({ error, loading, song }) {
	if (error !== '') {
		return <Errors />;
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
