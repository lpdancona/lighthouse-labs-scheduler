# Interview Scheduler

Interview Scheduler is a full stack web application that allows users to schedule, edit and delete interviews.
In order for this project to work it has to run alongside scheduler-api; that contains the database and its where the information of the interviews is stored.

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.
- This application runs alongside with scheduler-api that should be ran so that the databses can be viewed by the website
- Open your Browse and search http://localhost:8000/
- Enjoy the app by scheduling, editing or deleting an interview 😃

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

also, npm start scheduler-api

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

-axios
-@testing-library/react-hooks
-react-test-renderer
-sass

## Final Product

!["Browse interviews and available hours"](https://github.com/lpdancona/lighthouse-labs-scheduler/blob/master/docs/interviews.png?raw=true)
!["Create your interview and choose your prefered interviewer"](https://github.com/lpdancona/lighthouse-labs-scheduler/blob/master/docs/create.png?raw=true)
!["Edit ot delete an existant interview"](https://github.com/lpdancona/lighthouse-labs-scheduler/blob/master/docs/delete-and-edit.png?raw=true)
