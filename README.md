# Mott Macdonald - Demo App

## Point to Note
I time-boxed this project to 8 hours. Hence, no time to write tests :-(.

## Project setup
App is written in Typescript, and I used a Yeoman seed as a scaffold.
To run, clone this repo, then:

`npm install`
`gulp build`
`node lib/Main.js`

The build / test / run pipeline isn't great, (hence no gulp run), but I didn't spend time trying to improve it.
Note if the above doesn't work, then I've committed to .js (I wouldn't usually do this), so you can just run

`node lib/Main.js`

Note, only tested on Node v4.4


## Project design overview
Entry point to the app Main.ts, this listens to stdin, and instantiates the Command Parser and Grid Manager.

The app uses the Command Pattern, the Command Parser takes the string from stdin and parses it into an implementor of the Command interface.

The Grid Manager then executes theses command on the Grid, checks the result of the command, and rolls back (if necessary) via the History Manager.


 
 





