import React, { Component } from 'react';
import { millisToMinutesAndSeconds } from '../utils';
import { withRouter } from 'react-router-dom';

class SongListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: ''
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(id) {
		this.setState({ id: id });
		this.props.history.push(`/detail/${id}`);
	}

	render() {
		return (
			<tr onClick={() => this.onClickHandler(this.props.song._id)}>
				<td>{this.props.song.name}</td>
				<td>{this.props.song.artists}</td>
				<td>{millisToMinutesAndSeconds(this.props.song.duration_ms)}</td>
			</tr>
		);
	}
}

export default withRouter(SongListItem);
