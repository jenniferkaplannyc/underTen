// requires the passport file
const passport = require('passport');
// requires the database index
const models = require('../db/models/index');

// exports the user id to the passport
module.exports = () => {
  passport.serializeUsers((users, done) => {
    done(null, user.id);
  });
  // checks to see if the user is authorized
  passport.deserializeUsers((id, done) => {
    models.Users.findById(id)
    .then((users) => { done(null, users); })
    .catch((err) => { done(err, null); });
  });
};
