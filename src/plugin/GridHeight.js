Ext.define('Jarvus.plugin.GridHeight', {
    extend: 'Ext.Component',
    alias: 'plugin.gridheight',

    init: function(grid) {
        grid.setInfinite(false);
        grid.getScrollable().setY(false);
    }
});
