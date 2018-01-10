DgToast = function() {
  this._block = dg.getBlockFromDom('toast'); // Holds a reference to the toast block in the DOM.
  this._content = null; // Holds onto the content to be rendered in the toast.
};

DgToast.prototype.getBlock = function() {
  return this._block;
};

DgToast.prototype.isOpen = function() {
  return dg.hasClass(this.getBlock(), 'show');
};
DgToast.prototype.open = function() {
  dg.addClass(this.getBlock(), 'show');
};

DgToast.prototype.close = function() {
  dg.removeClass(this.getBlock(), 'show');
};

/**
 *
 * @param variables
 *  _content {*}
 */
DgToast.prototype.setContent = function(variables) {
  variables._theme = 'toast_wrapper';
  this.getBlock().innerHTML = dg.render(variables);
};

DgToast.prototype.clearContent = function() {
  this.getBlock().innerHTML = '';
};
