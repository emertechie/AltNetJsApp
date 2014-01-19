//noinspection BadExpressionStatementJS
({
    // See: https://github.com/jrburke/r.js/blob/master/build/example.build.js

    // "If this option is specified, then all the files from the app directory
    // will be copied to the 'dir:' output area, and baseUrl will assume to be
    // a relative path under this directory"
    appDir: 'public',

    // "By default, all modules are located relative to this path. If baseUrl
    // is not explicitly set, then all modules are loaded relative to
    // the directory that holds the build file. If appDir is set, then
    // baseUrl should be specified as relative to the appDir."
    baseUrl: "components",

    // Reuse the requirejs.config(...) setting from existing file:
    mainConfigFile: 'public/js/main.js',

    // Chance to remap any paths from 'public/js/main.js' here
    paths: {
        // Don't try to optimize in jQuery library - we'll load that from CDN
        jquery: "empty:"
    },

    // The directory path to save the optimized output
    dir: 'public-dist',

    // Don't bother optimizing any non-app JS files in 'public-dist' dir (E.g. from bootstrap or jQuery(
    skipDirOptimize: true,

    // NOTE: Setting to true to make sure I'm pointing at right directory before deleting (could be dangerous!)
    // Normally, you can use this to ensure only changed files copied over to output directory ('public-dist')
    // (but only if not doing any modifications that aren't safe to run twice on the same file)
    keepBuildDir: true,

    // "How to optimize all the JS files in the build output directory.
    // Right now only the following values
    // are supported:
    // - "uglify": (default) uses UglifyJS to minify the code.
    // - "uglify2": in version 2.1.2+. Uses UglifyJS2.
    // - "closure": uses Google's Closure Compiler ...
    // - "none": no minification will be done."
    optimize: "uglify",

    // optimizeCss: 'none',

    // "If you only intend to optimize a module (and its dependencies), with
    // a single file as the output, you can specify the module options inline,
    // instead of using the 'modules' section above..."
    name: "../js/main"

    /*modules: [
        {
            name: 'main'
        },

        // "This module entry combines all the dependencies of foo/bar/bop and foo/bar/bee
        // and any of their dependencies into one file."
        {
            name: "foo/bar/bop",
            include: ["foo/bar/bee"]
        },

        // "This module entry combines all the dependencies of foo/bar/bip into one file,
        //  but excludes foo/bar/bop and its dependencies from the built file..."
        {
            name: "foo/bar/bip",
            exclude: [
                "foo/bar/bop"
            ]
        }
    ]*/
})