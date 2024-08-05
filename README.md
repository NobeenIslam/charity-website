## Local files

You will need a '.env.local' file:

NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=[Redacted] (ask me for the ID)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[]
STRIPE_SECRET_KEY=[]
NEXT_PUBLIC_BASE_URL=[]

## Getting Started

Do a `npm install` in root
Go into `/sanity` and do another `npm install`

To run the development servers:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

`npm run storybook`

## Sanity Studio

cd into Sanity Folder

`npm run dev`

## Plop things:

To speed up some of the boiler-plate when you create a new component just do 'npx plop'

## Schemas things:

To generate types for schemas: `npx sanity-codegen` in root
When you create a schema add it to `index.js` in the schemas folder
When you create a new block add it to the `blocks` array in `blocks.js`
For blocks, make sure it goes into the switch case in `renderBlocks.js`


## Deployed Links:

Website: https://charity-website-ivory.vercel.app/
Sanity: https://charity-website.sanity.studio/

