## Getting Started
First, run the development server:

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

```npm run storybook```

## Sanity Studio

cd into Sanity Folder

```npm run dev```

## Schemas things:

To generate types for schemas: `npx sanity-codegen` in root
When you create a schema add it to `index.js` in the schemas folder
When you create a new block add it to the `blocks` array in `blocks.js`
When you create the component, make sure it goes into the switch case in `renderBlocks.js`
