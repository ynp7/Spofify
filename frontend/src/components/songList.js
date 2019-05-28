import React, { Component } from 'react';
import axios from '../config';
import '../styles/components/songList.css';
import SongListItem from './songListItem';

class SongList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: []
		};
	}
	componentDidMount() {
		axios
			.get('/songs/list')
			.then(response => {
				this.setState({ songs: response.data.songs });
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<div>
				<table>
					<caption>List of songs here</caption>
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Artists</th>
							<th scope="col">Duration</th>
						</tr>
					</thead>
					<tbody>
						{this.state.songs.map(song => (
							<SongListItem key={song._id} song={song} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default SongList;
