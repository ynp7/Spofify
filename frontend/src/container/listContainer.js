import React, { Component } from 'react';
import Header from '../components/header';
import SongList from '../components/songList';

class ListContainer extends Component {
	render() {
		return (
			<div>
				<Header />
				<SongList />
			</div>
		);
	}
}

export default ListContainer;
