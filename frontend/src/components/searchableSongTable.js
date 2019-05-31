import React from 'react';
import Indicator from './indicator';
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
		return <Indicator text="Oops, something went wrong" />;
	} else if (loading) {
		return <Loading />;
	} else if (songsFound === 0) {
		return (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<Indicator text="Oops, song not found" />
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
