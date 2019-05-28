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
			.get('/songs/list')
			.then(response => {
				this.setState({ song: response.data.songs });
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return <div>Details of the song here</div>;
	}
}

export default SongDetail;
