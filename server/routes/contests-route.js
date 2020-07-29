// Import express
const express = require('express')

// Import books-controller
const contestsRoutes = require('../controllers/contests-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/all', contestsRoutes.getAllScoresUserChallenge)
router.put('/reset', contestsRoutes.resetAllScoresUserChallenge)
router.get('/get/:contestId/:challengeId/:userId', contestsRoutes.getScoreUserChallenge)
router.put('/delete/:contestId/:challengeId/:userId', contestsRoutes.deleteScoreUserChallenge)
router.post('/post/:contestId/:challengeId/:userId/:score', contestsRoutes.createScoreUserChallenge)

// Export router
module.exports = router
