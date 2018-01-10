dg.theme_toast_wrapper = function(variables) {
  variables._attributes.class.push('toast-wrapper');
  var html = '<div ' + dg.attrs(variables) + '>';

  if (variables._content) {
    html += dg.render({
      _theme: 'toast_content',
      _content: variables._content
    });
  }

  return html + '</div>';
};
