# University Search

A Front End Engineer Code Exercise.  This project uses Node, Hapi.js, Angular, and is automatically deployed to OpenShift when pushed to GitHub.  It is built upon my ever-evolving bp-node boilerplate framework that supports multiple themes and apps within the same project.  This project example does not include unit or e2e test scripts, or form or api validation.

View the app: [universitysearch.theblameys.net/](http://universitysearch.theblameys.net/)

## Getting Started

Install Node.js and the npm package manager. After installation, run the following command to install the packages for this project.

```bash
$ npm install
```

- Install the [Bower Package Manager](http://bower.io/) by using npm. Bower is used to manage frontend packages and javascript.

```bash
$ npm install -g bower
```

- Install the [Gulp](http://gulpjs.com/) build system by using npm. Gulp is used for automating the development process.

```bash
$ npm install -g gulp
```

- (optional) Install the Typescript definition manager for intellisense in your code editor, then run `typings install` to download the definitions for this project.

```bash
$ npm install -g typings
$ typings install
```
##  Running the Application

Once you've installed the prerequisites and cloned the repository using `git`, you're ready to get started.

To install the node modules and bower packages, run the following command from the directory of your local copy of the repository.

```bash
$ npm install
```

After the install process is complete, you will be able to run the application using Gulp.

```bash
$ gulp serve
```

Your application will run on port 8080 in development. Open a browser window to [http://localhost:8080](http://localhost:8080) to see the results.
The gulp `serve` task will first compile the application before starting the server.

The REST api is autodocumenting (disabled in the boilerplate by default) and the generated documentation can be found at [http://localhost:8080/api/docs](http://localhost:8080/api/docs).
Swagger autodocuments the REST api using metadata from Node, Hapi.js, and Mongo.

If you want to build the application without running it, you can execute the following command.

```bash
$ gulp build
```

### File Changes

Gulp will monitor all files for changes and recompile whenever a change is detected.


## Deployment
This project deploys to an OpenShift pod automatically when committed code is pushed to the GitHub repository.  [http://web-universitysearch.44fs.preview.openshiftapps.com/#/](http://web-universitysearch.44fs.preview.openshiftapps.com/#/)