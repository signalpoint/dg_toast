/**
 * Implements hook_blocks_build_alter().
 */
function dg_toast_blocks_build_alter(blocks) {
  var classes = blocks.toast._attributes.class;
  if (!dg.inArray('toast', classes)) { classes.push('toast'); }
}
