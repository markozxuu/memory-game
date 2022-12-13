# Challenge Jüsto

## Table of Contents

- [Get started](#get-started)
- [Why i chose Next](#why-i-choose-next)
- [what can you expect](#what-can-you-expect)
- [Why i chose vercel](#why-i-chose-vercel)
- [Stack](#stack)
- [Metrics web vitals](#metrics-web-vitals)
- [CI/CD](#ci-cd)

## Get started

Well the steps to configure this is very simple. I'm using the pnpm version `7.16.7` and `v19.0.1` of node.js, once clarified, let's explain the commands found in the `package.json`. 



```json
 "scripts": {
    "dev": "next",
    "start": "next build && next start",
    "lint": "next lint",
    "prepare": "husky install",
    "pre-commit": "lint-staged --allow-empty"
  },
```

- dev: run our project locally
- start: create the build in production and run the app in a production environment
- lint: check that we comply with the rules defined in our eslint configuration file
- pre-commit: it defines the hook to execute before committing to a file

## Why i choose Next

Next.js is one of the most popular frameworks in the React ecosystem, it allows us great flexibility when building our applications, we can take approaches such as SSR, CSR or make a mix between both, which produces ISR. 

 I'm using this project as an experiment to see how a modern app would work in Next.js 13 and server components.

## What can you expect

- Written in TypeScript
- Server and Client Components
- Styled using Tailwind CSS
- Animations
- Test E2E
- CI/CD (vercel and checklyhq)
- Minimalist design

## Why i chose vercel

This part of the story is where ▲Vercel comes in. It combines the best developer experience with an obsessive focus on end-user performance. The platform enables frontend teams to do their best work, its application deployment infrastructure is based on serverless functions

## Stack

well this is my stack for the front:
- next.js
- tailwindcss
- react-confetti
- react-use-measure

to improve code quality:
- eslint
- prettier
- typescript
- husky
- lint-staged
- autoprefixer
- postcss

## Metrics web vitals

You can download the report made by lighthouse in the `/metrics` folder. I was able to reach a perfect score for both pages. This was possible due to optimization tasks that I carried out.

![alt text for screen readers](https://ibb.co/DKGG1BJ)

## CI CD

In the project a flow is enabled that triggers a new deployment for each new commit, this is called within vercel **"deployment preview"**. After that, checklyhq runs E2E test with real browsers doing tests with respect to web vitals.

![alt text for screen readers](https://ibb.co/wcjgqfh)
