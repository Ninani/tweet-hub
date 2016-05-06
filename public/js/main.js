var App = {}

App.IndexView = Backbone.View.extend({
	el: "#app",
	render: function () {
		var indexTmpl = JST['app/templates/index.hbs']();
		var tmpl = Handlebars.compile(indexTmpl);
		this.$el.html(tmpl);

	}
});

App.Router = Backbone.Router.extend({
	routes: {
		'': 'index'
	}
});

App.Router.execute = (function (App) {
	var router = new App.Router();

	router.on('route:index', function () {
		var indexview = new App.IndexView();
		indexview.render();
	})

	Backbone.history.start();
})(App)