// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
var VideoReporter = require('protractor-video-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // './src/**/*.e2e-spec.ts',
    './src/**/template.e2e-spec.ts'
  ],
  capabilities: {
    chromeOptions: {
      // args: [ "--headless" ] // uncomment to remove gui
    },
    browserName: 'chrome'
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    var path = require('path');
    VideoReporter.prototype.jasmineStarted = function() {
      var self = this;
      if (self.options.singleVideo) {
        var videoPath = path.join(self.options.baseDirectory, 'protractor-specs-' + Date.now() +'.mp4');

        self._startScreencast(videoPath);

        if (self.options.createSubtitles) {
          self._subtitles = [];
          self._jasmineStartTime = new Date();
        }
      }
    };

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
    jasmine.getEnv().addReporter(new VideoReporter({
        baseDirectory: path.normalize(path.join(__dirname, '../testresults/videos/')),
        createSubtitles: true,
        singleVideo: true,
        ffmpegCmd: path.normalize('/usr/bin/ffmpeg'),
        ffmpegArgs: [
            '-f', 'x11grab',
            '-framerate', '24',
            '-s', 'wsxga',
            '-i', ':0.0',
            '-q:v','10',
        ],
     }));
  }
};