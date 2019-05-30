import React, { Component } from 'react';

import '../styles/components/searchSong.css';
import searchIcon from '../assets/search.png';
import axios from '../config';
import Empty from './empty';
import Errors from './errors';
import SongList from './songList';
import Loading from './loading';

class SearchSong extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			searchInput: '',
			error: '',
			loading: true
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}
	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get('/songs/list')
			.then(response => {
				this.setState({
					songs: response.data.songs,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					error: error.message,
					loading: false
				});
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
		this.setState({ searchInput: e.target.value });
	}
	render() {
		const error = this.state.error;
		const songsFound = this.state.songs.length;
		const loading = this.state.loading;
		let searchBox;

		searchBox = (
			<div className="searchBox">
				<img className="searchIcon" alt="search icon" src={searchIcon} />
				<input
					autoFocus
					className="searchInput"
					type="input"
					placeholder="Search"
					value={this.state.searchInput}
					onChange={this.onChangeHandler}
				/>
			</div>
		);

		if (error !== '') {
			return <Errors />;
		} else if (loading) {
			return <Loading />;
		} else if (songsFound === 0) {
			return (
				<>
					{searchBox}
					<Empty />
				</>
			);
		} else {
			return (
				<>
					{searchBox}
					<SongList songs={this.state.songs} />
				</>
			);
		}
	}
}

export default SearchSong;
