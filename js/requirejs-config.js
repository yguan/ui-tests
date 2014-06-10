
requirejs.config({
//    urlArgs: "bust=" + (new Date()).getTime(), // only use for development
	//appDir: 'tests',
    //baseUrl: 'js/lib',
    paths: {
		lib: 'js/lib',
		automation: 'js/automation',
        Simulate: 'js/lib/simulate',
		mocha: 'js/lib/mocha',
		chai: 'js/lib/chai',
		specs: 'js/specs'
    },

    // doesn't seem to be needed
    shim: {
        mocha: {
            exports: 'mocha'
        },
        chai: {
            exports: 'chai'
        },
        Simulate: {
            exports: 'Simulate'
        }
    },
	dir: '../../www-built',
    modules: [
        {
            //module names are relative to baseUrl/paths config
            name: 'specs/all'
        }
    ]
});