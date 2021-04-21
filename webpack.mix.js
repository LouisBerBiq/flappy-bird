let mix = require('laravel-mix')
mix.disableNotifications();

mix	.setPublicPath('dist/')
	.copyDirectory('src/resources', 'dist/resources')
	.copyDirectory('src/index.html', 'dist/index.html')
	.js('src/js/main.js', 'dist/js/main.js')
	.sass('src/scss/main.scss', 'dist/css/main.scss')