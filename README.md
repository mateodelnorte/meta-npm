# meta-npm

npm plugin for [meta](https://github.com/mateodelnorte/meta)

## Usage

```
➜  meta git:(master) ./bin/meta

  Usage: meta [options] [command]


  Commands:

    git         manage your meta repo and child git repositories
    npm         run npm commands against your meta and child repositories
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
```
➜  meta git:(master) ./bin/meta npm

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
