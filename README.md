# Feedback Loop

## Description

_Weekend Challenge_

Feedback Loop is a full-stack application built over a weekend with React/Material UI frontend, Node/Express backend, and a PostgreSQL server. Feedback Loop is a single-page application where the user navigates through different forms to submit feedback to a server.

## Screenshots

![Admin View](/public/images/admin.png)

![Home View](/public/images/home.png)

## Prerequisites

- [NPM](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)

## Installation

1. Run the `git clone` command in your terminal
2. Run the `npm install` command in the same directory
3. Clone the database using the data.sql file. The expected database is 'prime_feedback'.
4. Run `npm run server` in the terminal
5. Run `npm run client` in a second terminal
6. Your web browser should open a new page with the application running

## Usage

1. The application necessitates the user must submit a feedback form
2. The user will arrive on the home page, or in this case, the first page of the feedback form.
3. The user will be expected to input a number from 1 to 5 for each of the pages up until the review page.
4. The review page is where the user can choose to go back and edit their feedback or submit the feedback.
5. The admin page is where the admin can see all the feedback retrieved from the server. The admin can choose to delete feedback which will also delete data on the server side.

## Built With

- HTML/CSS
- Material UI
- Node.js/Express
- React
- PostgreSQL
- Postico
- Postman

## Acknowledgement

Thanks to [Prime Digital Academy](primeacademy.io/) and those within the Cullen Cohort who helped me in creating this application!
