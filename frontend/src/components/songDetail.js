import React, { Component } from 'react';
import axios from '../config';
import '../styles/components/songDetail.css';
import Error from './error';

class SongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			song: [],
			error: ''
		};
	}
	componentDidMount() {
		axios
			.get('/songs/detail', { params: { rank: this.props.match.params.rank } })
			.then(response => {
				this.setState({ song: response.data.song[0] });
			})
			.catch(error => {
				this.setState({ error: error.message });
			});
	}
	render() {
		return (
			<div>
				{this.state.error === '' ? (
					<>
						<div>Details of the song here</div>
						<div>Name {this.state.song.name}</div>
						<div>Artists {this.state.song.artists}</div>
						<div>Duration {this.state.song.duration_ms}</div>
						<div>Rank {this.state.song.rank}</div>
						<div>Tempo {this.state.song.tempo}</div>
						<div>Energy {this.state.song.energy}</div>
					</>
				) : (
					<Error />
				)}
			</div>
		);
	}
}

export default SongDetail;
