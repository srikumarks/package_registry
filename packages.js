// Add a special generic configuration for github.
// If you have a package name of the form - "github.USERNAME.PROJECTNAME.x.y.z",
// it will be expected to be located at the URL -
//      "https://raw.github.com/USERNAME/PROJECTNAME/master/x/y/z.js"
// .. and "github.USERNAME.PROJECTNAME" maps to
//      "https://raw.github.com/USERNAME/PROJECTNAME/master/PROJECTNAME.js"
package.config({
    'github.*': function (components) {
        if (components.length < 2) {
            // Needs at least username, projectname and a filename.
            return undefined;
        }

        var username = components[0];
        var projectname = components[1];
        var path = (components.length === 2 ? projectname : components.slice(2).join('/')) + '.js';

        return {
            url: ('https://raw.github.com/' + username + '/' + projectname + '/master/' + path)
        };
    }
});

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
    'com.nishabdam.FD': { url: 'https://raw.github.com/srikumarks/FD.js/package/fd.js' }
});

// anclab stuff (http://anclab.org)
package.config({
    'com.anclab.steller.scheduler': { 
        url: 'http://nishabdam.com:8080/steller/doc/api_sketch/scheduler.js'
    },
    'com.anclab.steller.timer': { 
        url: 'http://nishabdam.com:8080/steller/doc/api_sketch/scheduler.js'
    }
});
