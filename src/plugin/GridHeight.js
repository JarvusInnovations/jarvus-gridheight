Ext.define('Jarvus.plugin.GridHeight', {
    extend: 'Ext.Component',
    alias: 'plugin.gridheight',


    config: {
        enableHorizontalScroll: false
    },

    init: function(grid) {
        var scrollable = grid.getScrollable();

        grid.setInfinite(false);

        scrollable.setY(false);
        scrollable.setX(this.getEnableHorizontalScroll());
    }
});
