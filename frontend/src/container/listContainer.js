import React, { Component } from 'react';
import Header from '../components/header';
import SongList from '../components/songList';
import SongDetail from '../components/songDetail';

class ListContainer extends Component {
	render() {
		return (
			<div>
				<Header />
				<SongList />
				<SongDetail />
			</div>
		);
	}
}

export default ListContainer;
