# Test: `<iframe>` with different AngularJS versions

## About the project

Each directory is its own project.

- The `iframe-content` is a page that is intended to run as content for the `iframe-container`. This runs a script built with AngularJS v.1.3.0.
- `iframe-container` is the page that contains an `<iframe>` which loads the `iframe-content`. This runs a script built with AngularJS v.1.2.26.

## Installation and setup

### 1. Hosts file

Add this entry to your hosts file:

```
127.0.0.1 container.iframe-test.com content.iframe-test.com
```

### 2. Node and Bower components

Make sure you have `node` and `bower` installed.

Then, go to in each directory (`iframe-container` and `iframe-content`) and type this command in the Terminal:

```
npm install && bower install
```

## Building the project

Whenever you need the projects' scripts (JS) and styles (LESS), do it in the `src/` directory of each project.

Then, in each directory, you can run this command:

```
gulp build
```

## Running the project

Since one project need to load another, we suggest that you first go to the `iframe-content` directory to run this command:

```
gulp dev
```

Unless you want to test this part as a standalone, you can dismiss and close the browser window that is then opened.

Then, head to the `iframe-container` directory and here also, run this command:

```
gulp dev
```

This will open a browser page with the project.

## Known issues

### Getting the parent window injector

Currently, calling `$window.parent.$('body')` throws an error. The error states that `$('body')` is not a function. To be explored.