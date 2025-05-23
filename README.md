# FarmGPU Documentation

This is the official documentation website for FarmGPU, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Project Structure

- `/docs` - Company documentation
- `/ai-datacenter` - AI Datacenter specific documentation
- `/static` - Static assets (images, etc.)
- `/src` - Source code and custom components

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true npm run deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

Please refer to the documentation for guidelines on contributing to this project.
