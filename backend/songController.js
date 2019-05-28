var express = require('express');
var router = express.Router();
var songModel = require('./songSchema');

router.get('/list', (req, res) => {
	songModel
		.find({ rank: { $lte: 50 } })
		.then(songs => {
			res.json({ songs: songs });
		})
		.catch(err => {
			res.json({ err: err.message });
		});
});

router.get('/detail', (req, res) => {
	const id = req.query.id;
	if (!id) {
		return res.json({ error: 'Data insufficient' });
	}
	songModel
		.find({ _id: id })
		.then(song => {
			res.json({ song: song });
		})
		.catch(err => {
			res.json({ err: err.message });
		});
});

router.get('/search', (req, res) => {
	var query = req.query.query;
	// if query is empty send all data
	songModel
		.find({
			$or: [
				{
					name: { $regex: query, $options: 'i' }
				},
				{
					artists: { $regex: query, $options: 'i' }
				}
			]
		})
		.then(songs => {
			return res.json({ songs: songs });
		})
		.catch(err => {
			return res.json({ message: 'Cannot query db' });
		});
});

module.exports = router;
