var request = require('superagent');

var CONTACT_INBOX = 'raedcabello@gmail.com';

module.exports = function(data) {
  return new Promise(function(resolve, reject) {
    request
      .post('https://formspree.io/' + CONTACT_INBOX)
      .set('X-Requested-With', 'xmlhttprequest')
      .send('_replyto=' + encodeURIComponent(data.email))
      .send('message=' + encodeURIComponent(data.message))
      .end(function(err, res) {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
  });
};
