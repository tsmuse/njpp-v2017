# What?

This is the source of my current portfolio site...unless I forgot to reuse this repo when I build a new one, in which case this is probably the source for an older version.

## Build instructions
Grunt CLI needs to be installed along with NodeJS.

`npm install -g grunt-cli`

from there it's just installing the dependancies... 

`npm install`

and either running the server (server is the default grunt task). Grunt will compile the Sass and copy any static dependancies into the dist folder, so it's a self contained process. 

`grunt`

or building the site for deploy

`grunt build`

Easy-peasy.

