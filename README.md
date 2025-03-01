
---
# Code exercise

## Short description:
Counter built with create-react-app, using useState + props, and Styled Components.

For this exercise I delved into learning Styled Components (via their docs) that were previously unfamiliar to me.

### Branches
The code-exercise is the main branch. I also have two branches: 
- A) a initiated (unfinished) project which uses useReducer + props (which is before refactoring of styled components and code in general), and 
- B) a branch in which I will be developing using useReducer + context. Stay tuned!

### Instructions: 
- Build a react app showing two buttons and a counter (as shown in received mock-ups), with functionality connected to the buttons. 
- The buttons should have a certain styling as detailed in the instructions I received, and should increase/decrease the count displayed in the counter. 
- The counter is connected to an array of git-repo names, and upon increasing/decreasing the count the number in the counter should correlate with the position in the array of reponames - fetching and showing some data about that repository. 
- The app should include error handling for the API, and other possible errors. 
- Extra feature - the app displays a loader while new data is being fetched from the API.


### I have also added some extra features of my own:
- Saving the current repo to localStorage, so that the same repo will still show when updating browser, as well as for decreasing the amount of web requests made.
- Responsivity mobile- / desktop-view.

---

## Techniques used (shields/badges)
![Git badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white/to/img.png) 
![VSCode badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white/to/img.png)
![ESLint badge](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white/to/img.png)
![Prettier badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E/to/img.png)
![HTML5 badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white/to/img.png)
![JavaScript badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E/to/img.png)
![TypeScript badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white/to/img.png)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB/to/img.png)
![GitHub badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white/to/img.png)

---


## Git commit convention:
- :sparkles: (feat): - *introduces a new feature to the codebase*
- :memo: (docs): - *documentation / README*
- :recycle: (refactor): - *refactoring of code*
- :construction_worker: (build): - *project build-up*
- :bug: (fix): - *patches a bug in your codebase*
- :lipstick: (style): - *css/scss styling*
- :rewind: (revert): - *revert to previous code*

---

## Run locally:

Clone the project

```terminal
  git clone https://github.com/Ayngie/noa-code-exercise.git
```

Go to the project directory

```terminal
  cd noa-code-exercise
```

Install dependencies

```terminal
  npm install
```

Start the server

```terminal
  npm start
```
