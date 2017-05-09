# What?

This is the source of my current portfolio site...unless I forgot to reuse this repo when I build a new one, in which case this is probably the source for an older version.

## Build instructions
Grunt CLI needs to be installed along with NodeJS.

`npm install -g grunt-cli`

from there it's just installing the dependancies...

`npm install`

and either running the server.

`grunt server`

or building the site for deploy (build is the default grunt task)

`grunt build` or just  `grunt`

In addition to building the handlebars templates Grunt will: compile the Sass, copy static dependancies into the dist folder, and run autoprefixer on the resulting CSS and Sass map. It's a self contained process! 

Easy-peasy.
