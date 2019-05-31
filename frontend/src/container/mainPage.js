import React from 'react';
import Empty from '../components/empty';
import Errors from '../components/errors';
import SongTable from '../components/songTable';
import Loading from '../components/loading';
import SearchBar from '../components/searchBar';

function MainPage({ error, songs, loading, searchInput, onChangeHandler }) {
	const songsFound = songs.length;

	if (error !== '') {
		return <Errors />;
	} else if (loading) {
		return <Loading />;
	} else if (songsFound === 0) {
		return (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<Empty />
			</>
		);
	} else {
		return (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<SongTable songs={songs} />
			</>
		);
	}
}

export default MainPage;
