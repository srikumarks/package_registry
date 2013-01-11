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
    }},

    'Kinetic': { external: { name: 'Kinetic'
        , url: 'http://www.kineticjs.com/download/kinetic-v3.9.8.js'
        , dependsOn: []
        , depNames: []
    }}
});

// Adding my general public facing libraries. I should be putting
// public module code in src/ directories of the repos.
// If no special config is found, org.sriku.elephant should map
// to 'http://sriku.org/lib/elephant/src/elephant.js' 
// and org.sriku.deer.parts.horn should map to 
// 'http://sriku.org/lib/deer/src/parts/horn.js'.
package.config({
    'org.sriku.*': function (components) {
        if (components.length < 1) {
            console.error("You didn't specify any library.");
            return undefined;
        }

        var path = (components[0] 
            + '/src/'
            + ((components.length === 1) ? components[0] : components.slice(1).join('/'))
            + '.js'
            );

        return {
            url: ('http://sriku.org/lib/' + path)
        };
    },
    'org.sriku.IO': { external: { name: 'IO'
        , url: 'http://sriku.org/lib/IO/src/IO.js' 
        , dependsOn: []
        , depNames: []
    }},
    'org.sriku.FD': { external: { name: 'FD'
        , url: 'http://sriku.org/lib/FD/fd.js'
        , dependsOn: []
        , depNames: []
    }}
});

// anclab stuff (http://anclab.org)
package.config({
    'org.anclab.steller': { external: { name: 'org.anclab.steller'
        , url:  [ 'http://sriku.org/lib/steller/steller.js'
                , 'http://sriku.org/lib/steller/models.js']
        , dependsOn: []
        , depNames: []
    }}
});
