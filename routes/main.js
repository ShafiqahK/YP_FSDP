const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback'); 
const alertMessage = require('../helpers/messenger');
const Payment = require('../models/Payment');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

router.get('/', (req, res) => {
	const title = 'Admin Page';
	res.render('index', {title: title}) // renders views/index.handlebars
});

router.get('/productanalysis', (req, res) => {
	res.render('analysis/productanalysis')
})

router.get('/addfeedback', (req, res) => {
	res.render('feedback/addfeedback')
});

router.post('/addfeedback', (req, res) => {
    let rating = req.body.rating.toString();
    let comment = req.body.comment.toString();
	let status = "uncheck";

    Feedback.create({
        rating,
        comment,
		status
    }).then((feedback) => {
        res.redirect('/listfeedback');
    })
    .catch(err => console.log(err))
});

// router.get('/listfeedback', (req, res) => {
// 	res.render('feedback/listfeedback')
// });

router.get('/listfeedback', (req, res) => {
	Feedback.findAll({
		raw: true
	}).then((feedbacks) => {
		res.render('feedback/listfeedback', {
			feedbacks: feedbacks
		});
	}).catch(err => console.log(err));
});

router.get('/delete/:id', (req, res) => {
	let feedbackid = req.params.id;
	// Select * from videos where videos.id=videoID and videos.userId=userID
	Feedback.findOne({
		where: {
			id: feedbackid
		},
		attributes: ['id']
	}).then((feedback) => {
		// if record is found, user is owner of video
		if (feedback != null) {
			Feedback.destroy({
				where: {
					id: feedbackid
				}
			}).then(() => {
				alertMessage(res, 'info', 'Feedback deleted', 'far fa-trash-alt', true);
				res.redirect('/listfeedback'); // To retrieve all videos again
			}).catch(err => console.log(err));
		} else {}
	});
});


// Shows edit feedback page
router.get('/edit/:id', (req, res) => { 
	Feedback.findOne({
		where: {
			id: req.params.id
		}
	}).then((feedback) => {
		res.render('feedback/editfeedback', { // call views/video/editVideo.handlebar to render the edit video page
			feedback
		});
	}).catch(err => console.log(err)); // To catch no video ID
});


// Save edited feedback
router.put('/saveEditedFeedback/:id', (req, res) => {
	let status = req.body.status;

	Feedback.update({
		status: status
	}, {
		where: {
			id: req.params.id
		}
	}).then(() => {
		res.redirect('/listfeedback'); // redirect to call router.get(/listVideos...) to retrieve all updated
			// videos
	}).catch(err => console.log(err));
});


module.exports = router;
