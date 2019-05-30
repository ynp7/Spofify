import React, { Component } from 'react';
import axios from '../config';
import '../styles/components/songList.css';
import SongListItem from './songListItem';
import Error from './error';
import searchIcon from '../assets/search.png';

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
						<div className="searchBox">
							<img className="searchIcon" alt="search icon" src={searchIcon} />
							<input
								className="searchInput"
								type="input"
								placeholder="Search"
								value={this.state.value}
								onChange={this.onChangeHandler}
							/>
						</div>
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
									{this.state.songs.map(song => (
										<SongListItem key={song._id} song={song} />
									))}
								</tbody>
							</table>
						</div>
					</>
				) : (
					<Error />
				)}
			</div>
		);
	}
}

export default SongList;
