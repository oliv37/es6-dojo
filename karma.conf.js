module.exports = function(config) {
  config.set({
    reporters: ['progress', 'html', 'live-html'],
    preprocessors: {
      'src/**/*.js': ['babel'],
      'spec/**/!(6-this).js': ['babel'],
    },
    babelPreprocessor: {
      options: {
          "presets": ["env"],
          "plugins": [
            "transform-es2015-modules-umd", 
            "transform-object-rest-spread"
          ]
      }
    },
	
	basePath: '',
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: [
	    'node_modules/jasmine2-custom-message/jasmine2-custom-message.js',
      'src/**/*.js',
      'spec/**/*.js',
      'src-legacy/**/*.js'
    ],
	
	autoWatch: true,
	
	singleRun: false,
 
    // the default configuration 
    htmlLiveReporter: {
      colorScheme: 'jasmine', // light 'jasmine' or dark 'earthborn' scheme 
      defaultTab: 'summary', // 'summary' or 'failures': a tab to start with 
 
      // only show one suite and fail log at a time, with keyboard navigation 
      focusMode: true,
    },
  });
};
