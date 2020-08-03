Create a minecode website with some challenges where someone can participate and submit one resolution.
Add possibility to make contestes and teams.
Login with google.

Frameworks/Languages:

  ReactJS
  TypeScript

Dependencies:

  axios
  SWR
  styled-components
  @types/styled-components (devDependecies)

Font:

  -apple-sysyem, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serife;

Pages:

  Home:
    List of contests/challenges
    List of online users
    Challenge info (if selected)
      Description
      Submit space
      My resolutions and scores (if applicable)

Database (sqlite3):

Difficulty:

  ID (int, required, unique)
  Title (string, required)
  Value (double [0... 1], required)

UserChallengeClassification

  ID (int, required, unique)
  User.ID (int, required)
  Contest.ID (int, required)
  Challenge.ID (int, required)
  Score (double, required)
    
Workflows:

  Require login:
    *Submit/Update a new response*:
    Login w/ Google -> Select challenge -> Submit response -> Push the response -> Dispute a new CI/CD Github actions when push (Run testes and calculate score) -> If testes are passed then store [UserID, ContestID, ChallengeID, Score]
    *View history*:
    Login w/ Google -> Select challenge -> View submitted resolutions
    *View profile*:
    Login w/ Google -> Click on 'My profile'
  No require login:
    *View general classification*:
    View classification of all members in all challenges
    *View contest classification*:
    Select challenge -> View classification of all members in selected contest
    *View challenge classification*:
    Select challenge -> View classification of all members in selected challenge
    *View contest*:
    Select contest
    *View challenge*:
    Select challenge
    
