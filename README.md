# Create React App v3 template for Wails (yarn version)
Create new [Wails](https://github.com/wailsapp/wails) projects w/ React JS using `yarn` instead of Wail's default `npm` option. 
For more information on Create React App please check the [official documentation](https://facebook.github.io/create-react-app/docs/getting-started). 

## prerequisites

Have [`Yarn`](https://yarnpkg.com/en/docs/install) installed at your system

## installation

download (or clone) the repository and copy the `create-react-app-yarn` folder inside wails templates directory `$GOPATH/src/github.com/wailsapp/wails/cmd/templates`

```bash
cd $GOPATH/src/github.com/wailsapp/wails/cmd/templates
git clone https://github.com/bh90210/wails-create-react-app-yarn.git
cp -R wails-create-react-app/create-react-app-yarn .
rm -R wails-create-react-app
```

## initialise a project 

run `wails init` from your terminal and select option `React JS (yarn)`
```bash
$ wails init
Wails v0.15.0 - Initialising project

The name of the project (My Project): MyProject        
Project Name: MyProject
The output binary name (myproject): 
Output binary Name: myproject
Project directory name (myproject): 
Project Directory: myproject
Please select a template:
  1: React JS (yarn) - Create React App v3 template
  2: React JS - Create React App v3 template
  3: Vue2/Webpack Basic - A basic Vue2/WebPack4 template
  4: Vuetify Basic - Vuetify + Webpack
Please choose an option [1]: 
```

## usage 

### serve the project

first run command `wails serve` in the project directory

then `cd frontend` and `yarn run start` to serve the front-end

### Go/Js

wip

### ejecting 

if you wish to eject run `yarn eject` in the `project/frontend` directory
