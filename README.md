# John Paul Caisido Manila — Portfolio

Personal portfolio site for John Paul Caisido Manila. It includes work history, skills, education, contact details, a profile card, and a Resume button that downloads the PDF.

The public site is published with GitHub Pages: https://johnmanila.github.io/

## Language and framework

| Item | Choice |
| --- | --- |
| Language | JavaScript (JSX) |
| UI framework | React 19 |
| Build tool | Vite 8 |
| Styling | CSS |
| Icons | Hugeicons |
| Package manager | npm |

React renders the pages. Vite starts the local dev server and builds the site for production. The interface is written in JavaScript using JSX, and the layout is styled with CSS.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer
- npm (included with Node.js)

## Run the site

Open a terminal in this folder, install the packages, then start the dev server:

```powershell
npm install
npm run dev
```

When Vite prints a local address, open it in the browser. The usual address is http://localhost:5173/

Leave the terminal open while you view the site. Press `Ctrl+C` to stop the server.

On Windows PowerShell, `npm` can fail if script execution is disabled. Use the `.cmd` command instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

Create the static files, then preview that build locally:

```powershell
npm run build
npm run preview
```

`npm run build` writes the site into the `dist` folder.

## Resume download

The Resume button downloads `public/Resume.pdf`.
