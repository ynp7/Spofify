import React from 'react';
import '../styles/components/songTable.css';
import SongTableItem from './songTableItem';

function SongTable(props) {
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
							<SongTableItem key={song._id} song={song} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default SongTable;
