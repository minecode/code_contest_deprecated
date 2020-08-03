// Import database
const knex = require('../db')

exports.getScore = async (req, res) => {
  knex
    .select('userId', knex.raw('SUM(score) as score'))
    .from('ScoreUserChallenge')
    .groupBy('userId')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

exports.getScoreByContest = async (req, res) => {
  knex
    .select('userId', knex.raw('SUM(score) as score'))
    .from('ScoreUserChallenge')
    .groupBy('userId')
    .where('contestId', req.params.contestId)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

exports.getScoreByContestChallenge = async (req, res) => {
  knex
    .select('userId', knex.raw('SUM(score) as score'))
    .from('ScoreUserChallenge')
    .groupBy('userId')
    .where('contestId', req.params.contestId)
    .where('challengeId', req.params.challengeId)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

exports.getScoreByUser = async (req, res) => {
  knex
    .select(knex.raw('SUM(score)  as score'))
    .from('ScoreUserChallenge')
    .groupBy('userId')
    .where('userId', req.params.userId)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

exports.getScoreByContestUser = async (req, res) => {
  knex
    .select(knex.raw('SUM(score)  as score'))
    .from('ScoreUserChallenge')
    .groupBy('userId')
    .where('userId', req.params.userId)
    .where('contestId', req.params.contestId)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

exports.getScoreByContestChallengeUser = async (req, res) => {
  knex
    .select(knex.raw('SUM(score)  as score'))
    .from('ScoreUserChallenge')
    .groupBy('userId')
    .where('userId', req.params.userId)
    .where('contestId', req.params.contestId)
    .where('challengeId', req.params.challengeId)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

exports.createScoreUserChallenge = async (req, res) => {
  knex('ScoreUserChallenge')
    .insert({
      id: req.params.userId + req.params.contestId + req.params.challengeId,
      userId: req.params.userId,
      contestId: req.params.contestId,
      challengeId: req.params.challengeId,
      score: req.params.score
    })
    .then(userData => {
      res.json(userData)
    })
    .catch(() => {
      knex('ScoreUserChallenge')
        .where('id', req.params.userId + req.params.contestId + req.params.challengeId)
        .update({ score: req.params.score })
        .then(userData => {
          res.json(userData)
        })
        .catch(err => {
          res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
        })
    })
}
