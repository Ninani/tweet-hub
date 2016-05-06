module.exports = function (grunt) {
	grunt.initConfig({
		handlebars: {
		  compile: {
		    options: {
		      namespace: "JST"
		    },
		    files: {
		      "public/js/hbs/templates.js": ["app/views/templates/*.hbs"],
		    }
		  }
		}
	})

	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.registerTask('default', ['handlebars'])
}