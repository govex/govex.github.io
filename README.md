This is the repository for the labs.centerforgov.org site. Switch to the gh-pages branch to manage the content.

2016.06.23 Changelog
* new /projects folder. it contains:
** /affordability (the affordability index)
** /dashboard
** /maps 
** /wwc_sa_* (self-assessment results)
* moved guides/datainventory and /data-ownership to /data-governance/
* for all the moves, turned on redirects so the previous URLs don't break. This uses redirect_from in the page YAML.
* for most moves, changed filenames to index.html
* Applied templating to nearly everything. if you need to add custom stuff to the <head> element, use head_include in the page YAML. See the new [affordability page](https://github.com/govex/govex.github.io/blob/master/projects/affordability/index.html) as an example.
* moved top menu navigation bar into the [_config.yml](https://github.com/govex/govex.github.io/blob/master/_config.yml)
* separated the layout templates into head, header, footer - now located in the [_includes](https://github.com/govex/govex.github.io/tree/master/_includes) folder.
* deleted other branches to avoid confusion. the `[master](https://github.com/govex/govex.github.io)` branch is used to deploy the site via GitHub Pages.
