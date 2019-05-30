import React, { Component } from 'react';
import axios from '../config';
import '../styles/components/songDetail.css';
import Errors from './errors';
import Loading from './loading';

class SongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			song: [],
			error: '',
			loading: true
		};
	}
	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get('/songs/detail', { params: { rank: this.props.match.params.rank } })
			.then(response => {
				this.setState({
					song: response.data.song[0],
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					error: error.message,
					loading: false
				});
			});
	}
	render() {
		const loading = this.state.loading;
		const error = this.state.error;

		if (error !== '') {
			return <Errors />;
		} else if (loading === true) {
			return <Loading />;
		} else {
			return (
				<>
					<div>Details of the song here</div>
					<div>Name {this.state.song.name}</div>
					<div>Artists {this.state.song.artists}</div>
					<div>Duration {this.state.song.duration_ms}</div>
					<div>Rank {this.state.song.rank}</div>
					<div>Tempo {this.state.song.tempo}</div>
					<div>Energy {this.state.song.energy}</div>
				</>
			);
		}
	}
}

export default SongDetail;
