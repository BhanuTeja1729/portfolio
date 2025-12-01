# Vite React TypeScript Project

Quick notes to host this site with Git / GitHub Pages or other Git-based hosts.

## Build & Run (local)

Install dependencies and run dev server:

```powershell
npm ci
npm run dev
```

Build for production:

```powershell
npm run build
npm run preview
```

The production build outputs to `dist/`.

## Prepare repository and push

1. Create a new GitHub repository (via website) named e.g. `my-site`.
2. In this project folder run (PowerShell):

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO>.git
git push -u origin main
```

Replace `<YOUR_USERNAME>` and `<REPO>` with your GitHub username and repository name.

## Deploy to GitHub Pages (automated via Actions)

This repository includes a GitHub Actions workflow that will:

- install Node.js
- install dependencies
- run `npm run build`
- publish the `dist/` folder to the `gh-pages` branch

By default the workflow triggers on pushes to `main`.

After you push `main`, open the repository on GitHub and visit Settings → Pages and ensure the `gh-pages` branch (root) is selected as the source if GitHub doesn't detect it automatically.

## Alternate hosts

- Netlify: connect your GitHub repo in Netlify and set the build command to `npm run build` and publish directory to `dist/`.
- Vercel: connect the repo and set the framework preset to `Vite` (auto-detected).

If you want, I can run the `git` commands and/or create the repository for you—tell me your GitHub repo URL or give permission to open a browser link.
