import React, { Component } from 'react';

class SongListItem extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.song.name}</td>
				<td>{this.props.song.artists}</td>
				<td>{this.props.song.duration_ms}</td>
			</tr>
		);
	}
}

export default SongListItem;
