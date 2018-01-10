/**
 * Display a toast.
 * @param content {String|Object} A string or dg8 render element.
 */
dg.toast = function(content) {

  var displayTime = 3000; // @TODO make this configurable for those overwriting the CSS animation timings.

  // Load up the toast, set its content then open it and close it after a certain amount of time.
  var toast = dg_toast.load();
  toast.setContent({ _content: content });
  toast.open();
  setTimeout(function() { toast.close(); }, displayTime);

};

/**
 * Returns the toast object.
 * @returns {*}
 */
dg_toast.load = function() {

  // Instantiate the toast object and set it aside and then return it.
  var toast = new DgToast();
  dg._toast = toast;
  return toast;

};
