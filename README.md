Let's try to port
[clojure-polylith-realworld-example](https://github.com/furkan3ayraktar/clojure-polylith-realworld-example-app)
to deno

## Rationale

I want to see if it is possible to use polylith architecture with;

1. A lot of microservices
2. A lot of independent teams

At the end, this is a kind of monorepo management method. There are building
blocks (bricks) all lives happily together and enables running tests, loading
code, developing locally. But when it comes to deployment, one can bring
"bricks" together and create multiple artifacts out of all those.

This project is an attempt to make polylith more approachable for more people. I
am a big fan of Clojure but it is not that easy to explain things to people
while constantly need to explain other "Clojury" things.

Here I am porting real world example to Javascript/Typescript to use it while
explaining my ideas to people already know some NodeJS.

## Steps

- Create a similar app structure by hand. Don't care writing idiomatic
  Typescript (I already can't at this point in time)
- See what kind of a tooling would be nice
- Consider developing a spec for polylith structure
