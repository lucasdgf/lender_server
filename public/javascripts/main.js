// Create IE + others compatible event handler (from https://davidwalsh.name/window-iframe)
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  var label = $('#application-status');
  var message = e.data ? 'Approved' : 'Denied';

  label.removeClass('label-warning');
  label.html(message);
  // Change application status based on Nova response
  if (e.data) {
    label.addClass('label-success');
  } else {
    label.addClass('label-danger');
  }
}, false);
