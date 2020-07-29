// Import database
const knex = require('../db')

// Retrieve all books
exports.getAllScoresUserChallenge = async (req, res) => {
  // Get all books from database
  knex
    .select('*') // select all records
    .from('ScoreUserChallenge') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}

// Remove specific book
exports.deleteScoreUserChallenge = async (req, res) => {
  // Find specific book in the database and remove it
  knex('ScoreUserChallenge')
    .where('userId', req.params.userId)
    .where('contestId', req.params.contestId)
    .where('challengeId', req.params.challengeId)
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Book ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} book: ${err}` })
    })
}

// Remove all books on the list
exports.resetAllScoresUserChallenge = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('ScoreUserChallenge')
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'ScoreUserChallenge list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting ScoreUserChallenge list: ${err}.` })
    })
}

exports.getScoreUserChallenge = async (req, res) => {
  knex
    .select('score')
    .from('ScoreUserChallenge')
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
      userId: req.params.userId,
      contestId: req.params.contestId,
      challengeId: req.params.challengeId,
      score: req.params.score
    })
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving ScoreUserChallenge: ${err}` })
    })
}
