# JoeGelay.com

One of my favorite quotes is from Leonardo da Vinci who said, "Simplicity is the ultimate sophisitication". I value minimalism in many areas of my life, and wanted to create a personal site to reflect that.
<br />
<br />
The site is built with React.js, React Router, and CSS.
<br />
<br />

### Development

- Node.js 18.x locally via `.nvmrc` (`v18.14.0` in this repo)
- Install dependencies with `npm ci`
- Start the app with `npm start`
- Create a production build with `npm run build`
- The current CRA toolchain needs the OpenSSL legacy provider under Node 18, which is now wired into the npm start/build scripts

### Deployment

- Netlify build command: `npm run build`
- Netlify publish directory: `build`
- The app uses hash-based routing, so no SPA rewrite rule is required for Netlify
- Firebase Hosting files are still present during the cutover in case you need a rollback path

### Features

- 'Projects' page features some things that I've built.
- 'Writing' page uses Medium API to stay up-to-date with all my technical writing.
- 'Readng' page makes use of a Goodreads widget to show the 10 latest books I've read.
- Mobile-friendly responsive design with collapsable hamburger menu.

### Author

- **Joe Gelay** - [Joe Gelay's Github](https://github.com/joegelay)

### License

This project is open to the public. No license is required for use.
