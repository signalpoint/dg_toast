dg.theme_toast_content = function(variables) {
  variables._attributes.class.push('toast-content');
  return '<div ' + dg.attrs(variables) + '>' + dg.render(variables._content) + '</div>';
};
