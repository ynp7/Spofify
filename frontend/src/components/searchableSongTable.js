import React from 'react';
import Empty from './empty';
import Errors from './errors';
import SongTable from './songTable';
import Loading from './loading';
import SearchBar from './searchBar';

function SearchableSongTable({
	error,
	songs,
	loading,
	searchInput,
	onChangeHandler
}) {
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

export default SearchableSongTable;
