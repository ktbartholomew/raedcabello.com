var React = require('react');
var ReactDOM = require('react-dom');

if (document.getElementById('contact-form')) {
  var ContactForm = require('./components/contact-form');
  ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
}

if (document.getElementById('contact-trigger')) {
  var ContactFormTrigger = require('./components/contact-form-trigger');
  ReactDOM.render(
    <ContactFormTrigger />,
    document.getElementById('contact-trigger')
  );
}

var Modal = require('./components/modal');

var modalContainer = document.createElement('div');
document.body.appendChild(modalContainer);
ReactDOM.render(<Modal />, modalContainer);
