# TODO

[Minify](https://www.npmjs.com/package/minify)

Front-End Pagination

Showcase latest episode

Only show subheader for all previous episodes in log

Style links

On page load, there is just the title and bastille image,
  - but after 1-2 seconds, the navigation buttons or other contents in or around the header load

When scrolling down, the REVOLUTIONS header slides to the left and either the nav links or hamburger menu moves to the right of it (fade out or slide up of previous location and fade in of these in header)


## Code Changes

[ ] Retain file structure after Browserifying instead of having everything get flattened (have a modules directory for example).
[ ] Start loading page or run app() before response w/ podcast object.

### Changes to createElement

[X] Factor out into its own file and require
[ ] Auto-require or include in each file
[ ] Don't append fragments, just append the child elements of the fragment.
[ ] Accept datasets, other attributes, custom attributes
[ ] Accept functions (render as <Component/> not just {component()})
