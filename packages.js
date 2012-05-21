// popular libraries.
package.config({
    'jQuery': { external: { name: '$'
        , url: 'http://code.jquery.com/jquery-1.7.2.js'
        , dependsOn: []
        , depNames: []
    }},

    'Underscore': { external: { name: '_'
        , url: 'https://raw.github.com/documentcloud/underscore/master/underscore.js'
        , dependsOn: []
        , depNames: []
    }},

    'Backbone': { external: { name: 'Backbone'
        , url: 'https://raw.github.com/documentcloud/backbone/master/backbone.js'
        , dependsOn: ['Underscore']
        , depNames: ['_']
    }},

    'Prototype': { external: { name: 'Prototype'
        , url: 'https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js'
        , dependsOn: []
        , depNames: []
    }},

    'MooTools': { external: { name: 'MooTools'
        , url: 'http://mootools.net/download/get/mootools-core-1.4.5-full-nocompat.js'
        , dependsOn: []
        , depNames: []
    }}
});

// See https://github.com/srikumarks/IO.js for info about this package.
package.config({
    'com.nishabdam.IO': { url: 'https://raw.github.com/srikumarks/IO.js/master/IO.js' }
});

// See https://github.com/srikumarks/FD.js for info about FD.js
package.config({
    'com.nishabdam.IO': { url: 'https://raw.github.com/srikumarks/FD.js/package/fd.js' }
});
