# Bookstore-react
The Bookstore is a website that allows us to: display a list of books, add a book and remove a selected book.

<h1>Bookstore</h1>

<!-- TABLE OF CONTENTS -->
# 📗 Table of Contents

- [Bookstore-react](#Bookstore-react)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Bookstore](#-bookstore)
    - [How to build the "Bookstore" application?](#how-to-build-the-bookstore-application)
    - [Projects list](#projects-list)
      - [Project 1: Initialize project with components (React only).](#project-1-initialize-project-with-components-react-only)
      - [Project 2: Add reducers and actions.](#project-2-add-reducers-and-actions)
      - [Project 3: Use Redux in React components.](#project-3-use-redux-in-react-components)
      - [Project 4: Connect to API.](#project-4-connect-to-api)
      - [Project 5: Styling.](#project-5-styling)
      - [Deployment.](#deployment)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Tools i have used for this project ](#tools-i-have-used-for-this-project-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment-1)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->
# 📖 Bookstore<a name="about-project"></a>
The Bookstore is a website that allows us to: display a list of books, add a book and remove a selected book.

<!-- > Describe your project in 1 or 2 sentences. -->
### How to build the "Bookstore" application?
I will need to build a website with two subpages:
* /books
* /categories

However, I will only need to implement the /books page (see the image below). The /categories page will stay empty in this MVP (will develop this page on the future).
<p align="center">
  <img src= "./src/assets/bookstore.png" alt="books" width="500px" />
</p>

### Projects list
I will start "Bookstore" website only with React code. Then I will be building the rest of it and learning Redux Toolkit for the whole week.

Here is the list of projects that will guide me through the steps described below. I will find details about each of the project requirements in the upcoming program activities.

- Project 1: Initialize project with components (React only).
- Project 2: Add reducers and actions.
- Project 3: Use Redux in React components.
- Project 4: Connect to API.
- Project 5: Styling.
- Deployment.

#### Project 1: Initialize project with components (React only).
This is the first project of the Bookstore application. I will set up the environment and tools needed to develop a React application. In the following projects, I will develop the actual application.

- Set-up linters on local environments.
- Used correct flow GitFlow.
- Documentation the project in a professional way on README file.
- First, make sure I have [Node.js](https://nodejs.org/en/) installed on my local machine
- Setup a new React application using [Create React App](https://create-react-app.dev/)
- The application should run in the browser without errors

- splitted UI into these components:
  1. BookStoreApp: the parent or root component. It holds two direct child components.
  2. Header: display the backstore heading text.
  3. BookStoreLogic: holds the application logic. It includes two direct child.
  4. BookstoreTodo: will take the user’s input.
  5. BookStoreList: serves as a container for the bookstore items.
  6. BookStoreItem: renders the individual bookstore item.

<p align="center">
  <img src="./src/assets/bookstore_app_components.png" alt="books" width="100%" />
</p>

  
#### Project 2: Add reducers and actions.
Install [React Router V6](https://reactrouter.com/en/main/start/tutorial#setup)
[Setup router](https://reactrouter.com/en/main/start/tutorial#adding-a-router) inside of <App>
Add 2 routes in this application, each should render a page component:
 - /
 - /categories
 - 
#### Project 3: Use Redux in React components.
Create components inside of the /components directory:
 - Contains individual book state, as well as a button to delete the book
 - Contains a list to renders individual books
 - Contains a form to create new books
 - Contains a navigation to link to the 2 routes you created

#### Project 4: Connect to API.

#### Project 5: Styling.
#### Deployment.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<!-- > Describe the tech stack and include only the relevant sections that apply to your project. -->
<details>
  <summary>Client Side / Front-End</summary>
  <ul>
    <li><a href="https://www.w3.org/html/">HTML</a></li>
    <li><a href="https://www.w3.org/Style/CSS/">CSS</a></li>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://create-react-app.dev/">React</a></li>
    <li><a href="https://reactrouter.com/">React Router</a></li>
  </ul>
</details>

<details>
  <summary>Server Side / Back-End</summary>
  <ul>
    <li><a href="https://www.json.org/json-en.html">JSON</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://www.npmjs.com/package/big.js">big.js</a></li>
    <li><a href="https://api-ninjas.com/api/quotes">API Ninjas</a></li>
    <!-- <li><a href=""> - </a></li>
    <li><a href=""> - </a></li> -->
  </ul>
</details>

<details>
    <summary>Package, Library, Framework</summary>
      <ul>
        <li><a href="https://jestjs.io/">Jest</a></li>
      </ul>
  </details>

<!-- Features -->
### Tools i have used for this project <a name="tools"></a>
  <details>
    <summary>Code Convention, Code Analysis</summary>
      <ul>
        <li><a href="https://eslint.org/">ESLint</a></li>
        <li><a href="https://webhint.io/">Webhint</a></li>
        <li><a href="https://stylelint.io/">Stylelint</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en">Lighthouse</a></li>
        <li><a href="https://www.npmjs.com/package/npm-check">node_modules checker</a></li>
      </ul>
  </details>
  <details>
    <summary>Version Control, CI/CD, Hosting Service</summary>
      <ul>
        <li><a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">GitFlow</a></li>
        <li><a href="https://pages.github.com/">Github Pages</a></li>
        <li><a href="https://github.com/features/actions">Github Actions</a></li>
        <li><a href="https://git-scm.com/">Git</a></li>
      </ul>
  </details>
  <details>
    <summary>IDE, Desktop Apps, Other Tools</summary>
      <ul>
        <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li><a href="https://desktop.github.com/">Github Desktop</a></li>
        <!-- <li><a href="https://www.figma.com/">Figma</a></li> -->
      </ul>
  </details>

### Key Features <a name="key-features"></a>

<!-- > Describe between 1-3 key features of the application. -->
- display a list of books 
- add a book
- remove a selected book
- single page apps (SPA)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->


<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>

<!-- > Describe how a new developer could make use of your project. -->
To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- git version 2.38.x
- node.js version > 12.x
- IDE (visual studio code, etc)
- browser (chrome, firefox, edge, safari)
- install the dependencies

### Setup

Clone this repository to your desired folder:

```sh
  cd bookstore-cms
  git git@github.com:fickryiman/bookstore-cms.git
```


### Install

Install this project with:

```sh
  cd bookstore-cms
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run build (production environment)
  npm start (development environment)
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Run tests

To run tests, run the following command:
Run Github Actions Test
```sh
  npm test

  npx stylelint "**/*.{css,scss}"
  npx eslint "**/*.{js,jsx}"

  auto fix linter with --fix
  npx stylelint "**/*.{css,scss}" --fix
  npx eslint "**/*.{js,jsx}" --fix
```

### Deployment

You can deploy this project using:
GitHub Pages
Example:
```sh
git@github.com:fickryiman/bookstore-cms.git
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Bilal Ahmed**

- GitHub: [@bilalrajput09](https://github.com/bilalrajput09)
- Twitter: [@bilal_rajput09](https://twitter.com/bilal_rajput09)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/bilal-ahmed-18b12019a/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->
## 🔭 Future Features <a name="future-features"></a>

<!-- > Describe 1 - 3 features you will add to the project. -->
- add login to user with social media auth or google auth
- create mobile version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->
## ⭐️ Show your support <a name="support"></a>

<!-- > Write a message to encourage readers to support your project -->

If you like this project please follow me on my GitHub: [@bilalrajput09]((https://github.com/bilalrajput09) or connect on my LinkedIn: [@Bilal-Ahmed](https://www.linkedin.com/in/bilal-ahmed-18b12019a/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## 🙏 Acknowledgments <a name="acknowledgements"></a>

<!-- > Give credit to everyone who inspired your codebase. -->
First thing first, I would like to say Alhamdulillah, Thanks to my Families, Microverse and Micronaut's, Reviewer's, Thank you for all of the experiences, lesson and everythings.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
