import React from 'react';
import Indicator from './indicator';
import SongTable from './songTable';
import Loading from './loading';
import SearchBar from './searchBar';
import '../styles/components/searchableSongTable.css';

function SearchableSongTable({
	error,
	songs,
	loading,
	searchInput,
	onChangeHandler
}) {
	const songsFound = songs.length;
	let componentToRender;

	if (error !== '') {
		componentToRender = <Indicator text="Oops, something went wrong" />;
	} else if (loading) {
		componentToRender = <Loading />;
	} else if (songsFound === 0) {
		componentToRender = (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<Indicator text="Oops, song not found" />
			</>
		);
	} else {
		componentToRender = (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<SongTable songs={songs} />
			</>
		);
	}

	return <div className="searchableSongTable">{componentToRender}</div>;
}

export default SearchableSongTable;
