[![Build Status](https://travis-ci.com/mateodelnorte/meta-npm.svg?branch=master)](https://travis-ci.com/mateodelnorte/meta-npm)

# meta-npm

npm plugin for [meta](https://github.com/mateodelnorte/meta)

Using `meta npm link && meta npm link --all` enables a lerna-like experience for local development by creating symlinks so each project uses the development version of any other project in the meta repo:

For example, meta itself is developed in this way:

```sh
# install meta
npm i -g meta

# clone and enter the meta repo
meta git clone git@github.com:mateodelnorte/meta.git
cd ./meta

# install plugins
npm install

# run install for all child repos
meta npm install

# create symlinks to/from all child repos
meta npm link --all

# link meta itself globally
npm link
```

## Usage

```
➜  meta npm

  Usage: meta-npm [options] [command]

  Options:

    -h, --help    output usage information

  Commands:

    clean         delete the node_modules folder in meta and child repositories
    install       npm install meta and child repositories
    link [--all]  npm link child repositories where used within child and meta repositories
    outdated      check outdated dependencies in meta and child repositories
    publish       npm publish meta and child repositories
    run           npm run commands against meta and child repositories
    symlink       directly symlink meta and child repositories without using global npm link
    help [cmd]    display help for [cmd]
```

