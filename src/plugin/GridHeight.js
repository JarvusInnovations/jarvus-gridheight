/**
 * Expand grid to height of contents
 *
 * TODO:
 * - Maybe leave scroller alive but configure it to support horizontal scrolling if needed?
 */
Ext.define('Jarvus.plugin.GridHeight', {
    extend: 'Ext.Component',
    alias: 'plugin.gridheight',

    init: function(grid) {
        grid.container.setScrollable('horizontal');
        grid.setInfinite(false);
        grid.addCls('jarvus-grid-autoheight');
    }
});
