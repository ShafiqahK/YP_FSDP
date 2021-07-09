// const express = require('express');
// const Feedback = require('../models/Feedback'); 
// const router = express.Router();

// router.post('/addfeedback', (req, res) => {
//     let rating = req.body.rating.toString();
//     let comment = req.body.comment.toString();

//     Feedback.create({
//         rating,
//         comment
//     }).then((feedback) => {
//         res.redirect('feedback/listfeedback');
//     })
//     .catch(err => console.log(err))
// });

// router.get('/listfeedback', (req, res) => {
// 	Feedback.findAll({
// 		raw: true
// 	}).then((feedbacks) => {
// 		res.render('feedback/listfeedback', {
// 			feedbacks: feedbacks
// 		});
// 	}).catch(err => console.log(err));
// });

// // router.get('/delete/:id',(req, res) => {
// // 	let feedbackid = req.params.id;
// // 	// Select * from videos where videos.id=videoID and videos.userId=userID
// // 	Feedback.findOne({
// // 		where: {
// // 			id: feedbackid
// // 		},
// // 		attributes: ['id']
// // 	}).then((feedback) => {
// // 		// if record is found, user is owner of video
// // 		if (feedback != null) {
// // 			Feedback.destroy({
// // 				where: {
// // 					id: feedbackid
// // 				}
// // 			}).then(() => {
// // 				alertMessage(res, 'info', 'Feedback deleted', 'far fa-trash-alt', true);
// // 				res.redirect('/feedback/listfeedback'); // To retrieve all videos again
// // 			}).catch(err => console.log(err));
// // 		} else {}
// // 	});
// // });

// module.exports = router;