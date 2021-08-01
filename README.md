# Revolutions
A Mode Modern Website for the Revolutions Podcast

## Why does this exist?
On one hand I like that [The History of Rome](https://thehistoryofrome.typepad.com/) and [Revolutions](https://thehistoryofrome.typepad.com/revolutions_podcast/) are still on old school wordpress websites.
There's a charm in the typos, the out of date headlines that haven't been changed since 2017 notifying us that once Mike wraps up the French revolution, the Haitian revolution will be coming up next.

On the other hand, though, Revolutions deserves an updated home on the web. When the Revolutions series wraps up, it should have a long life with new listeners discovering it many years into the future, as still keeps happening with THoR.
I hope an updated site that is more inviting, that showcases what the show has to offer to a new listener that knows nothing about it or Mike's other work, will help carry forward its legacy.
As with other classic books or movies, works like these need continued stewardship to help give them continued life.

That's the idea, anyways. Also, I just wanted to experiment with making a lightweight website with a handful of the of my favorite tools I enjoy using from popular modern frameworks like React. That brings me to the configuration.

## Configuration

This site uses jsx with Browserify and Babel, but not much else. You'll need to run 'npm run build' to run it in the browser. That'll compile the jsx into normal javascript, taking everything under src/scripts and depositing it in dist. Everything in dist is generated by build. But if you remove a file from src/scripts, it won't automatically disappear from dist so you can just delete everything in dist and run build again.

In the same 'npm run build' command, after converting jsx, build then runs Browserify which takes everything in dist converted by babel and makes that into js code that will actually run in the browser. You'll see in src/scripts all the jsx files use require statements. Also note that these require statements are written to work as relative imports from other files within dist. So while you're writing in src/scripts, write the requires with the babel converted/generated file in dist in mind instead. Browserify is what allows this, inerprets the require statements, and converts it all into a single file also under dist. This file, bundle.js, is the final js file that's actually sent to the client.

