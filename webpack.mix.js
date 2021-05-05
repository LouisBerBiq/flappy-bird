let mix = require('laravel-mix')
mix.disableNotifications();

mix	.setPublicPath('dist/')
	.copyDirectory('src/resources', 'dist/resources')
	.copy('src/index.html', 'dist/')
	.js('src/js/main.js', 'dist/js/')
	.sass('src/scss/main.scss', 'dist/css/')
	.sourceMaps();