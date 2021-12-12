# Guild chat

`$` denotes a terminal command

**Tech stack**
- [React 17+](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Styled components](https://styled-components.com/)
- [Firebase](https://firebase.google.com/)
- [Cypress testing](https://www.cypress.io/)

## Install dependencies
### $ `yarn`

## Start the app
1. ### $ `yarn start`
2. Navigate to http://localhost:3000/
**Note: It may try to open a browser for you with a page not found. Ignore that browser, that is for automated testing. Instead, open a new browser window and paste in the address. **

## Testing
1. Make sure that you are still running the site in a terminal
2. Open a new terminal
3. $ `yarn run cypress open`
4. In a few seconds, the cypress app will start and you will see a list of tests
5. Before you click on the tests, choose Electron 94 from the browser list in the top right. There is a known issue with Chrome attempting to load localhost url.
