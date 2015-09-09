module.exports = function (grunt)
{
    grunt.initConfig({
        'wiredep':{
            'task': {
                'src': [
                    'index.html'
                ],
                'options': {
                    'exclude': [
                        '/jquery/',
                        '/requirejs',
                        '/angular/',
                        '/angular-ui-router/'
                    ]
                }
            }
        },
        'injector': {
            'options': { },
            'local_dependencies': {
                'files':{
                    'index.html':['assets/css/*.css']
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-injector");
    grunt.loadNpmTasks("grunt-wiredep");
    grunt.registerTask("default", ['wiredep', 'injector']);
};