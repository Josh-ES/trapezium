/**
 * Please see Karma config file reference for better understanding:
 * http://karma-runner.github.io/latest/config/configuration-file.html
 */
module.exports = function(config) {
    config.set({
        /**
         * Set up custom browser launchers
         */
        customLaunchers: {
            PhantomJS_Desktop: {
                base: "PhantomJS",
                options: {
                    viewportSize: {
                        width: 1920,
                        height: 1080,
                    },
                    clipRect: {
                        width: 1920,
                        height: 1080,
                    },
                },
            },
        },

        /**
         * This path will be used for resolving.
         */
        basePath: '',

        /**
         * List of test frameworks we will use. Most of them are provided by separate packages (adapters).
         * You can find them on npmjs.org: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['mocha', 'chai', 'sinon', 'source-map-support', 'jquery-3.2.1'],

        /**
         * Entry point / test environment builder is also written in TypeScript.
         */
        files: [
            'tests/tests.scss',
            'tests/main.tests.ts',
        ],

        /**
         * Transform files before loading them.
         */
        preprocessors: {
            'tests/tests.scss': ['webpack'],
            'tests/main.tests.ts': ['webpack'],
        },

        webpack: require('./webpack/webpack.test.js'),

        /**
         * Make dev server silent.
         */
        webpackServer: { noInfo: true },

        /**
         * A lot of plugins are available for test results reporting.
         * You can find them here: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['mocha', 'coverage'],

        /**
         * This JSON file is "intermediate", in post-test script we use remap-istanbul to map back to TypeScript
         * and then generate coverage report.
         */
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'html',
                },
            ],
        },

        /**
         * Only Phantom is used in this example.
         * You can find more browser launchers here: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: ['PhantomJS_Desktop'],

        /**
         * This is CI mode: run once and exit.
         */
        autoWatch: true,
        singleRun: true
    });
};
