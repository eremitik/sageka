This was created during my time as a student at Code Chrysalis.

It was created in the MERN stack, with additional styling from @material-ui/core.
The app's purpose is to track high-profile peoples' promises made with community scoring.

You can install and run locally with the following:
`client` == FE, `server` == BE
1. `npm i` for both `client` and `server` folders.
2. Create a `.env` in `server` folder with only your password to mongoDB atlas with `DB_PASS=<yourpassword>`
3. In `server/index.js` edit the username to reflect <yourusername> in `mongoose.connect` method.
4. `npm start` for each respective part.