import React, { Component } from 'react';
import axios from '../config';
import '../styles/components/songDetail.css';

class SongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			song: []
		};
	}
	componentDidMount() {
		axios
			.get('/songs/detail', { params: { id: this.props.match.params.id } })
			.then(response => {
				this.setState({ song: response.data.song[0] });
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<div>
				<div>Details of the song here</div>
				<div>Name {this.state.song.name}</div>
				<div>Artists {this.state.song.artists}</div>
				<div>Duration {this.state.song.duration_ms}</div>
				<div>Rank {this.state.song.rank}</div>
				<div>Tempo {this.state.song.tempo}</div>
				<div>Energy {this.state.song.energy}</div>
			</div>
		);
	}
}

export default SongDetail;
