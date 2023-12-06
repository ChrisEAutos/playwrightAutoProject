# playwrightAutoProject

This is a demo project which uses the playwright automation framework to test the site https://automationintesting.online/. The tests have been implemented using a Page Object Model design pattern.

# Pull the latest copy of this repository from main branch

- Clone https://github.com/ChrisEAutos/playwrightAutoProject.git to your machine

# Install Playwright

- Open the project with VSCode
- Open a terminal in VSCode and run: npm init playwright@latest
- If asked use Javascript for this project.
- Accept all other default options

# Install VSCode extensions

- Install Playwright Test for VSCode
- Install Prettier - Code formatter

# Recording tests with Code Gen

- Open the project with VSCode
- Open a terminal and run: npx playwright codegen
- Begin using the browser to record test input

# Playing tests via command line

We can run the tests using headed and headless browsers

- For headed browsers use: npx playwright test --project=chromium --headed  
- To run all tests with all headless browsers we can use: npx playwright test
- To run tests in debug mode: npx playwright test --debug
- To run tests using the playwright gui: npx playwright test --ui








