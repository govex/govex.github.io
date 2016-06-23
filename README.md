This is the repository for the labs.centerforgov.org site. The `master` branch contains the live content. Directly edit this branch to make minor changes. Create other branches to make major changes, and then create pull requests to the `master` branch to deploy them.

2016.06.23 changelog
* new `/projects` folder. it contains:
  * `/affordability` (the affordability index)
  * `/dashboard`
  * `/maps` 
  * `/self-assessment/` (self-assessment results)
* moved `guides/datainventory` and `/data-ownership` to `/data-governance/`
* moved `civic-data-standard` to `/open-data/`
* for all the moves, turned on redirects so the previous URLs don't break. This uses `redirect_from:` in the page YAML.
* for most moves, changed filenames to index.html
* applied templating to nearly everything. if you need to add custom stuff to the `<head>` element, use `head_include:` in the page YAML.
  * see [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from#usage) for details
  * see the new [affordability page](https://github.com/govex/govex.github.io/blob/master/projects/affordability/index.html) as an example
* moved top menu navigation bar into the [`_config.yml`](https://github.com/govex/govex.github.io/blob/master/_config.yml)
* separated the layout templates into head, header, footer - now located in the [`_includes`](https://github.com/govex/govex.github.io/tree/master/_includes) folder.
* deleted other branches to avoid confusion. the [`master`](https://github.com/govex/govex.github.io) branch is used to deploy the site via GitHub Pages.
