#frontend-nanodegree-mobile-portfolio
Mobile Portfolio is a class project for the Udacity frontend nanodegree.

----
#Contents
* [Run it](#run-it)
* [The Project](#the-project)
* [References](#references)
* [Original ReadMe](#original-readme)

----
# Run it
If you just want to see it run, you can check it out at:
- https://teh2.github.io/Optimization/index.html
which is a horribly simple html page that points to the various versions of the portfolio, with and without optimizations. For convenience, I'll list those versions here too:
1. [The original code](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)
1. [my intermediate code](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) - after clean up, but before build.
1. [my final code](https://github.com/udacity/frontend-nanodegree-mobile-portfolio/tree/master/build) - after migrating the whole thing to gulp to standardize building.
1. [Final running version](https://teh2.github.io/Optimization/build/index.html) - this is the page to feed to Google's PageSpeed Insights!
 
In order to make this code run, you'll need to
* grab the code from the github repo
* put it somewhere where your local web server can see it.

Note: it doesn't run particularly well by just opening index.html locally in a browser, so I have included a small file next to index.html, called server.js, which contains the code  that I use locally to run it on a node.js server. If you are running node.js, fire up server.js under node, and go to http://localhost:3000/index.html. If you have a different preferred web server that you use locally, feel free to skip node.js and my simple server.js file.

----
# The Project
The point of this project was to optimize the provided web site. There were several parts of the web site that needed optimizing:
* the CRP (Critical Rendering Path) on the main index.html page needed modifications to achieve a PageSpeed score of at least 90.
  * Force Async loading of some of the JS code.
  * Add Media=print to force the print related CSS to only load for printing.
  * Inline the critical CSS and move the loading of the rest into a script so it loads after the initial page load.
  * compress images to minimize bytes transferred.
* Optimize the scrolling framerate on the Pizza.html page.
  * This involves changing the JS code in the updatePositions function.
  * What I did here was to pull the code out of the for loop that calculates the phase change amount for each of the five pizza positions and create a small list of those five amounts.
  * Then I simply added the correct phase amount to each of the pizzas.
  * I also changed out the querySelectorAll call for an equivalent getElementsByClassName call, because it's faster.
  * Next, I determined that most of the pizzas were off the bottom of the visible page and so I did a calculation to see if the pizza was visible or not, and then stopping the loop after the first pizza that was not visible.
* Optimize the time to resize the pizza images on the pizza.html page.
  * This involves changing the JS code in the changePizzaSizes function.
  * Originally, all of the code was inside the for loop, meaning it got executed once for each and every pizza image on the page.
  * It's much faster to pull as much of the code out of the for loop as possible, and only update the actual image size inside the loop.
  * I also changed out the querySelectorAll call for an equivalent getElementsByClassName call, because it's faster.
  * unfortunately, I can't pull the same "short circuit" trick here as in the animated background image code, because these pizzas actually move up and down with the scrolling, and they all eventually become visible.
* Optimize the overall site loading (content efficiency).
  * For this, I used Gulp to automate the build process and standardize the optimizations
  * gulp supplies countless building blocks that can be chained together to make modifications to the source files of your site. I used:
    * uglify - compress JS files.
	* minify-html - compress html files.
	* minify-css - compress css files.
	* image-optimization - compress images.
	* and several others that make things easier and more consistent.
  * take a look at gulpfile.js for some useful tips and tricks!

----
# References
In the process of completing this project, I used numerous references. The most significant were:
* The original project code from the git repository at: https://github.com/udacity/frontend-nanodegree-mobile-portfolio
* The chrome Canary version, for its developer tools:
* webpagetest.org for some benchmarking: http://webpagetest.org
* I originally went through several painful steps of trying to compress the images.
  * I got info about using jpegtran from: http://blarg.co.uk/blog/comparison-of-jpeg-lossless-compression-tools
  * I also tried File Optimizer, which I read good things about here: http://www.creativebloq.com/design/image-compression-tools-1132865
  * and downloaded from here:  http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer
* I spent a lot of time reading about optimization at Google's analytics pages: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
* I spent a great deal of time asking Google's PageSpeed  Insights to run my page: https://developers.google.com/speed/pagespeed/insights/
* In order to make my pages available over the internet so that Insights could get at them, I used ngrok: https://ngrok.com/
* I read a boatload of pages about the critical rendering path:
  * http://www.stevesouders.com/blog/2009/05/18/flushing-the-document-early/
  * https://developers.google.com/web/fundamentals/performance/critical-rendering-path/
  * https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp
  * https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path
* And bunches of other pages about speeding up rendering:
  * http://andydavies.me/blog/2013/10/22/how-the-browser-pre-loader-makes-pages-load-faster/
  * https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#minification-preprocessing--context-specific-optimizations
  * https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css
* After getting a good handle on the various types of optimizations, I spent a bunch of time learning all about gulp and various gulp plugins:
  * gulp: http://gulpjs.com/
  * examples of using gulp tasks: http://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/
  * finding gulp packages at npm: https://www.npmjs.com
  * late in the process, I needed a text replacement task: https://www.npmjs.com/package/gulp-replace
  * Which caused me to need some info about regular expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

----
# Original README
The original version of this readme contained the following text:

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
