import React, { Component } from 'react';
import { millisToMinutesAndSeconds } from '../utils';
import { withRouter } from 'react-router-dom';

class SongListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rank: ''
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(rank) {
		this.setState({ rank: rank });
		this.props.history.push(`/detail/${rank}`);
	}

	render() {
		return (
			<tr onClick={() => this.onClickHandler(this.props.song.rank)}>
				<td>{this.props.song.name}</td>
				<td>{this.props.song.artists}</td>
				<td>{millisToMinutesAndSeconds(this.props.song.duration_ms)}</td>
			</tr>
		);
	}
}

export default withRouter(SongListItem);
