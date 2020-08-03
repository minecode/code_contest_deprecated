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
router.get('/global', contestsRoutes.getScore)
router.get('/global/:contestId', contestsRoutes.getScoreByContest)
router.get('/global/:contestId/:challengeId', contestsRoutes.getScoreByContestChallenge)
router.get('/:userId', contestsRoutes.getScoreByUser)
router.get('/:userId/:contestId/', contestsRoutes.getScoreByContestUser)
router.get('/:userId/:contestId/:challengeId/', contestsRoutes.getScoreByContestChallengeUser)
router.post('/:contestId/:challengeId/:userId/:score', contestsRoutes.createScoreUserChallenge)
router.put('/:contestId/:challengeId/:userId/:score', contestsRoutes.createScoreUserChallenge)

// Export router
module.exports = router
