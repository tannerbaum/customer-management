# Customer Management Sample Project

Link: https://statuesque-dodol-665ab7.netlify.app/

This sample project was created somewhere in the 15-20 hour range over the course of the week. A good chunk of that time was spent learning Nuxt and Google Cloud Platform, the latter of which was scrapped for Supabase (more on that later).

## Setup

Set the envs defined in .env.example (obviously only I have these)

´´´
npm install
npm run dev

´´´

Unit tests can be run with `npm run test` and don't require envs to be set.

## Deployment

Deployments are triggered on pushes to main. I am the only one with branch privileges.

## Decisions made

- I decided to use TailwindCSS, because I think it is kind of fun and thought it could help improve the speed of styling a bit.
- From the start I used Nuxt server routes to wrap my Postgres calls. It allowed me to begin development with a local instance of Postgres without worrying about Google Cloud yet, and I assumed it was like NextJS and it would obfuscate where the actual function calls are being made later.
  - At that time I was using pg-node.
- After trying to decipher the monster that is Google Cloud Platform – and often having their walkthroughs in their docs fail despite following them step-by-step – I gave up in the interest of time and tried out Supabase for the first time, a firebase alternative that uses Postgres databases. Some coworkers were fans and I see why, the docs are so user friendly in comparison.
- The app uses vee-validate for forms. That seems pretty standard for vue projects. And Zod on top of that because everyone loves Zod.
- I wrote my tests with Vitest instead of Jest because the configuration for a Nuxt project running Vite is much more straightforward.
- Once I had already forsaken Google Cloud, I just picked Netlify to deploy the site.

## Other notes

The assignment mentions the use of Vue's provide and inject API, but I didn't really see the need for it in this project as there isn't much state to begin with.

Google Cloud aside, the site probably could have been deployed to Firebase as requested easily enough instead of Netlify. I apologize for not going down that route, but I was just looking forward to putting a wrap on the project.

Nuxt auto-imports are crazy!
