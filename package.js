Package.describe({
    summary: "A meteor package for the stand-alone parallax scrolling library, Skrollr.",
    version: "0.0.1",
    git: "https://github.com/tsega/meteor-skrollr.git"
});

Package.on_use(function (api, where) {
    api.versionsFrom('METEOR@0.9.0');

    api.add_files([
      'lib/js/skrollr.min.js', // Add Skrollr Library
    ], 'client');
});
