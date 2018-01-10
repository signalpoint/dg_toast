dg_toast.blocks = function() {
  var blocks = {};
  blocks['toast'] = {
    build: function () {
      return new Promise(function(ok, err) {
        ok({
          toast: {
            _markup: ''
          }
        });
      });
    }
  };
  return blocks;
};
