# AI Cancer UI

This is the frontend + backend for out senior design project; group `sdmay24-10`

## Deployment

- Inside `sdmay24-10` (or any other directory of this project) run the following command to add a second remote:
    - `git remote add deploy git@github.com:ChrisTague1/sdmay24-10.git`
    - This will allow you to push to [this copy of our project](https://github.com/ChrisTague1/sdmay24-10)
- Push branches/changes to this remote to have them deployed automatically:
    - **Pushing a branch**: `git push deploy <<your branch name>>`
    - **Pushing the main branch**: `git push deploy main`
- The status of deployment can be viewed in [this github page](https://github.com/ChrisTague1/sdmay24-10)
- The dashboard for deployments can be viewed [here](https://vercel.com/christague1s-projects/sdmay24-10)
    - If you cannot access this let Chris know

## Running

If you do not have `node` installed, [install it](https://nodejs.org/en)

```bash
# to see if you have node
node --version
```

To install dependencies:

```bash
npm ci
```

To test locally, run:

```bash
npm start
```

## Development

This project uses the following (these resources are enough to learn):
- [Svelte](https://svelte.dev/docs/introduction)
- [Sveltekit](https://kit.svelte.dev/docs/introduction)
- [TensorFlowJS](https://www.tensorflow.org/js)
- [TailwindCSS](https://tailwindcss.com/docs/utility-first)
