System.config({
    traceurOptions: {
        annotations: true,
        types: true,
        memberVariables: true
    },
    paths: {
        'traceur':  'libs/traceur.min.js',
        'traceur-runtime':  'libs/traceur.min.js',
        'angular2/*': 'libs/angular2.dev.20.js',
        'components/*': 'components/*.js',
        'services/*': 'services/*.js'
    }
});


System.import('components/app');

