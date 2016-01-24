/**
 * Expand grid to height of contents
 *
 * TODO:
 * - Maybe leave scroller alive but configure it to support horizontal scrolling if needed?
 */
Ext.define('Jarvus.plugin.GridHeight', {
    extend: 'Ext.Component',
    alias: 'plugin.gridheight',

    config: {
        enableVertical: false
    },

    init: function(grid) {
        var scrollable = grid.getScrollable(),
            container = grid.container;

        if (this.getEnableVertical()) {
            scrollable.setDirection('horizontal');
            container.hide();
            grid.on('painted', function() {
                grid.setWidth(grid.parent.element.getWidth())
                container.show();
            }, null, { single: true });
        } else {
            scrollable.setDisabled(true);
        }

        grid.setInfinite(false);
        grid.addCls('jarvus-grid-autoheight');
    }
});
