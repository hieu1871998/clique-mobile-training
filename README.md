![Racing Collective logo](https://gitlab.fruitful.io/prism/prism-buybloodstock-next/raw/develop/public/assets/images/logos/rc-logo-primary.png)

![coverage](https://img.shields.io/gitlab/coverage/prism/prism-buybloodstock-next/develop?gitlab_url=https%3A%2F%2Fgitlab.fruitful.io&style=flat-square) ![build](https://img.shields.io/jenkins/build?jobUrl=https%3A%2F%2Fci.fruitful.io%2Fjob%2Fprism-bloodstockexchange-next%2F&style=flat-square) ![node@latest: v18.10.0 (shields.io)](https://img.shields.io/badge/node%40latest-v18.10.0-c80000?style=flat-square&logo=npm) ![yarn@stable: 3.2.2 (shields.io)](https://img.shields.io/badge/yarn%40stable-3.2.2-2188b6?style=flat-square&logo=yarn) ![React@latest: 18.2.0 (shields.io)](https://img.shields.io/badge/react%40latest-^18.2.0-61dafb?style=flat-square&logo=react) ![Next.js: 12.3.0 (shields.io)](https://img.shields.io/badge/next@latest-^12.3.0-323130?style=flat-square&logo=nextdotjs) ![Typescript: lang (shields.io)](https://img.shields.io/badge/-typescript-3178c6?style=flat-square&logo=typescript&logoColor=white) ![antd@latest: 4.23.3 (shields.io)](https://img.shields.io/badge/antd%40latest-^4.23.3-1890ff?style=flat-square&logo=antdesign) ![tailwindcss (shields.io)](https://img.shields.io/badge/-tailwindcss-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white) ![emotion: styled (shields.io)](https://img.shields.io/badge/emotion-styled-ff69b4?style=flat-square&logo=npm)  ![axios: 0.27.2 (shields.io)](https://img.shields.io/badge/axios-^0.27.2-671ddf?style=flat-square&logo=axios) ![tanstack/react-query: ^4.7.2 (shields.io)](https://img.shields.io/badge/tanstack%2Freact--query-%5E4.7.2-ef4444?style=flat-square&logo=react-query) ![Day.js: ^1.11.5 (shields.io)](https://img.shields.io/badge/Day.js-%5E1.11.5-ff5f4c?style=flat-square&logo=npm) ![LODASH: ^4.14.182 (shields.io)](https://img.shields.io/badge/lodash-%5E4.14.182-3492ff?style=flat-square&logo=lodash) ![qs](https://img.shields.io/badge/-ljharb%2Fqs-555?style=flat-square&logo=npm) ![streamich/react-use](https://img.shields.io/badge/-streamich%2Freact--use-555?style=flat-square&logo=npm)

# Racing Collective Development Repository
## Table of content
 - [Installation](#installation)
 - [CLI Commands](#cli-commands)
 - [View host](#view-host)
 - [Pre-commit](#pre-commmit)
 - [Code requirements](#code-requirements)
 - [Tech stacks](#tech-stacks)
 - [Project structure](#project-structure)

## Installation
    git clone git@gitlab.fruitful.io:prism/prism-buybloodstock-next.git
    cd prism-buybloodstock-next/
    yarn install  

## CLI Commands
### Build:

> Standard build:

	yarn build

> Build with webpack analyzer:

	yarn build-analyze

> Build with enviroment variables:

	yarn build-test
	yarn build-prod
	yarn build-uat
### Development:
    yarn dev
### Production
	yarn start
	
## View host
    http://localhost:3000/

## Pre-commit
- Create branch flow format `sprint*q*/**-**` (e.g. `sprint7q3/PD-187`)
- Run `build` and check for error before commit.
-  **`Rebase`** before committing and merging.
- Create merge request.

## Code requirements
- Clean, simple, smart.
- Use [**`Prettier`**](https://prettier.io/) to format code and abide to [**`ESLint`**](https://eslint.org/) rules.
- Remove redundant code and/or imports.
- Interface definition is **REQUIRED**.  

## Tech stacks
[**Yarn - Package Manager**](https://yarnpkg.com/) ![yarn@stable: 3.2.2 (shields.io)](https://img.shields.io/badge/yarn%40stable-3.2.2-2188b6?style=flat-square&logo=yarn)
: Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

[**React**](https://reactjs.org/) ![React@latest: 18.2.0 (shields.io)](https://img.shields.io/badge/react%40latest-^18.2.0-61dafb?style=flat-square&logo=react)
: A JavaScript library for building user interfaces. 

[**Next.js by Vercel**](https://nextjs.org/) ![Next.js: 12.3.0 (shields.io)](https://img.shields.io/badge/next@latest-^12.3.0-323130?style=flat-square&logo=nextdotjs)
: Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.  

[**TypeScript**](https://www.typescriptlang.org/) ![Typescript: lang (shields.io)](https://img.shields.io/badge/-typescript-3178c6?style=flat-square&logo=typescript&logoColor=white)
: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. 


[**Ant Design**](https://ant.design/) ![antd@latest: 4.23.3 (shields.io)](https://img.shields.io/badge/antd%40latest-^4.23.3-1890ff?style=flat-square&logo=antdesign)
: A design system for enterprise-level products. Create an efficient and enjoyable work experience. 


[**Tailwind CSS**](https://tailwindcss.com/) ![tailwindcss (shields.io)](https://img.shields.io/badge/-tailwindcss-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
: A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.  

[**Emotion**](https://emotion.sh/docs/introduction) ![emotion: babel-plugin (shields.io)](https://img.shields.io/badge/emotion-babel--plugin-ff69b4?style=flat-square&logo=npm) ![emotion: eslint-plugin (shields.io)](https://img.shields.io/badge/emotion-eslint--plugin-ff69b4?style=flat-square&logo=npm) ![emotion: react (shields.io)](https://img.shields.io/badge/emotion-react-ff69b4?style=flat-square&logo=npm) ![emotion: server (shields.io)](https://img.shields.io/badge/emotion-server-ff69b4?style=flat-square&logo=npm) ![emotion: styled (shields.io)](https://img.shields.io/badge/emotion-styled-ff69b4?style=flat-square&logo=npm)
: Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.  

[**Axios**](https://axios-http.com/docs/intro) ![axios: 0.27.2 (shields.io)](https://img.shields.io/badge/axios-^0.27.2-671ddf?style=flat-square&logo=axios)
: Axios is a _[promise-based](https://javascript.info/promise-basics)_ HTTP Client for [`node.js`](https://nodejs.org/) and the browser. It is _[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)_ (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.  

[**TanStack Query | React Query**](https://tanstack.com/query/v4) ![tanstack/react-query: ^4.7.2 (shields.io)](https://img.shields.io/badge/tanstack%2Freact--query-%5E4.7.2-ef4444?style=flat-square&logo=react-query)
: Powerful asynchronous state management for TS/JS and React.  

[**Day.js**](https://day.js.org/) ![Day.js: ^1.11.5 (shields.io)](https://img.shields.io/badge/Day.js-%5E1.11.5-ff5f4c?style=flat-square&logo=npm)
: Fast 2kB alternative to Moment.js with the same modern API  

[**Lodash**](https://lodash.com/) ![LODASH: ^4.14.182 (shields.io)](https://img.shields.io/badge/lodash-%5E4.14.182-3492ff?style=flat-square&logo=lodash)
: A modern JavaScript utility library delivering modularity, performance & extras.  

[**ljharb/qs**](https://github.com/ljharb/qs) ![qs](https://img.shields.io/badge/-ljharb%2Fqs-555?style=flat-square&logo=npm) 
: A querystring parsing and stringifying library with some added security.  

[**streamich/react-use**](https://github.com/streamich/react-use) ![streamich/react-use](https://img.shields.io/badge/-streamich%2Freact--use-555?style=flat-square&logo=npm)
: React hooks library.  

## Project structure
```
.
|
├── .yarn
├── jenkins
├── mocks
├── pages
├── public
└── src
	├── components
	├── constants
	├── containers
	├── contexts
	├── interfaces
	├── network
	│ ├── queries
	│ └── services
	├── styles
	├── ui
	└── utils
```

.yarn
: Contains Yarn related files. See: [Questions & Answers | Yarn - Package Manager (yarnpkg.com)](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)  

jenkins
: Contains build files of environments.  

mocks
: Contains mock data and files.  

pages
: Define pages/routers.  

public
: Contains assets file like images, fonts, ...  

src
: Contains main source code of the project.  

├components
: Contains file components.  

├constants
: Reusable constants and enumerated type.  

├containers
: Contains content of pages.  

├contexts
: Contains the file declaring the contexts.  

├interfaces
: Typescript type and interface declarations.  

├network
: Define endpoint and API calls to server by React Query services and queries/mutations.  

├style
: CSS, SCSS, LESS classes and styles.  

├ui
: Contains UI library usually includes but not limited to styled Ant Design components.  

└utils
: Reusable functions/hooks/utilities/logics.
