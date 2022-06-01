# StubHub API Documentation

[![CI](https://github.com/viagogo/viagogo-api-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/viagogo/viagogo-api-docs/actions/workflows/ci.yml)

This is the documentation website for the StubHub API! (http://developer.stubhub.com)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to contribute

All submissions are welcome. Fork the repository, read the rest of this README file and make some changes.
Once you're done with your changes send a pull request. Thanks!

## How to run the site locally

### Prerequisites

You're going to need:

- [Node JS](https://nodejs.org/)

### Getting Set Up

 1. Fork this repository on Github.
 2. Clone *your forked repository* (not our original one) to your hard drive with `git clone https://github.com/YOURUSERNAME/viagogo-api-docs.git`
 3. `cd viagogo-api-docs`
 4. Install all dependencies: `npm install`
 5. Start the preview server: `npm run start`

## How to edit the documentation

### Project Structure

This website is built using [Docusaurus 2](https://docusaurus.io/) and it uses the [default project
structure for Docusaurus websites](https://docusaurus.io/docs/installation#project-structure).

### Editing Existing Docs and Announcements

Open the `.md` or `.mdx` file for the content you want to edit and make your changes. See
[Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) for more information.

### Adding New Docs

1. Add a `.md` or `.mdx` file under the `./docs/` folder
2. Update `./sidebars.js` to add your new doc to the side-bar. See 
[Docusaurus Sidebar](https://docusaurus.io/docs/sidebar) for more details

### Adding New Announcements

1. Add a new `.md` or `.mdx` file named `YYYY-MM-DD-your-announcement-name.mdx` under the `./blog/`
folder. See [Docusaurus Blogs](https://docusaurus.io/docs/blog) for more details
