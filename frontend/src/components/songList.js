import React, { Component } from 'react';
import axios from '../config';
import '../styles/components/songList.css';
import SongListItem from './songListItem';
import Error from './error';

class SongList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			value: '',
			error: ''
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}
	componentDidMount() {
		axios
			.get('/songs/list')
			.then(response => {
				this.setState({ songs: response.data.songs });
			})
			.catch(error => {
				this.setState({ error: error.message });
			});
	}
	onChangeHandler(e) {
		axios
			.get('/songs/search', { params: { query: e.target.value } })
			.then(response => {
				this.setState({ songs: response.data.songs });
			})
			.catch(error => {
				this.setState({ error: error.message });
			});
		this.setState({ value: e.target.value });
	}
	render() {
		return (
			<div>
				{this.state.error === '' ? (
					<>
						<div>
							<input
								type="text"
								value={this.state.value}
								onChange={this.onChangeHandler}
							/>
						</div>
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
					</>
				) : (
					<Error />
				)}
			</div>
		);
	}
}

export default SongList;
