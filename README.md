# Coachify Technical Assessment

Thank you for your interest in joining Coachify as a Software Engineer. This assessment is intended
to help us gain a better understanding of your approach to problem solving and software development.
We understand that your time is valuable and so it's with great appreciation and consideration that
we've requested your participation in this assessment. We are excited about your candidancy and are
looking forward to reviewing your submission.

If you have any questions or concerns regarding this assessment please do not hesitate to ask.

---

## Challenge

Coachify is the first platform specifically designed to help video game coaches manage and grow their business, 
and as such it's incredibly important that we provide coaches with the tools they need to help their students progress.
One of our coaches' key needs is the the ability to create and manage goals. With that in mind, the main objective of this
challenge is to build a web application that allows users to create and manage goals.

### Core Objectives

- Create a web application that allows users to create and manage goals
- Use the FeathersJS client exported from `./src/api.ts`
- Use the key dependencies that have been provided in this boilerplate: NextJS, FeathersJS, TypeScript

#### Creating a new goal

- GIVEN I am on the homepage
- THEN I should see a form to create a new goal

#### Viewing existing goals

- GIVEN I have created a goal
- WHEN I visit the homepage
- THEN I should see the goals I have created
- AND I should see the status of each goal
- AND I should see any notes associated with that goal

#### Updating a goal

- GIVEN I have created a goal
- WHEN I am viewing that goal
- THEN I should be able to edit that goal
- AND I should be able to add notes to the goal
- AND I should be able to update the status of the goal

#### Filtering my goals

- GIVEN I have created goals
- WHEN I am viewing my goals
- THEN I should be able to filter goals by their status

### Bonus Objectives

- Add automated tests
- Add a [hook](https://docs.feathersjs.com/api/hooks.html) to the FeathersJS `goals` service, defined in `./src/api.ts`, to perform data validation

### Guidelines

- Develop your solution following the same best practices you would follow for a business critical production-bound web application.
- Please commit early and often. We are interested in more than just the final solution.
- Feel free to add NPM dependencies as you see fit.
- Please do not add additional system dependencies.
- You're welcome to use any resources available to you. This include Google, StackOverflow, etc. All we ask is that you develop your own solution and do not plagerize/copy pre-existing solutions.
- Once finished, please submit your solution by either:
  - compressing it and sending it via email
  - pushing it a private repository and sharing the link via email

### Review Process

During the review process we are considering serveral factors. The following is a non-exhaustive list included for your consideration:

- general approach to problem solving and web application development
- use of native modules
- use of external modules (npm dependencies, cdn inclusions, etc)
- code style and consistency
- logical correctness
- application performance
- commit frequency and consistency
- simplicity and flexibility
- testability and text coverage

---

## Getting Started

### Dependencies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Setup

```bash
git clone git@github.com:coachifygg:assessment \
 && cd assessment \
 && yarn install \
 && yarn dev
```

### Stack

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [FeathersJS](https://feathersjs.com/)
