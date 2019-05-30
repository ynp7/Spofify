import React from 'react';
import '../styles/components/songList.css';
import SongListItem from './songListItem';

function songList(props) {
	console.log(props);
	return (
		<>
			<div className="title">Top 50 Songs</div>
			<div className="table-wrapper">
				<table className="songTable">
					<thead>
						<tr>
							<th scope="col">TITLE</th>
							<th scope="col">ARTIST</th>
							<th scope="col">DURATION</th>
						</tr>
					</thead>
					<tbody>
						{props.songs.map(song => (
							<SongListItem key={song._id} song={song} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default songList;
