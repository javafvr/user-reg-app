const express = require('express'),
      router = express.Router(),
      registration = require('../models/registration-model')

// Создание и запись в базу данных

// router.post('/registration', (req, res) => {
//   const post = new registration({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName
//   })

//   post.save((err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send({
//         success: true,
//         message: `User with ID_${data._id} saved successfully!`
//       })
//     }
//   })
// })