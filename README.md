# Login Page Component

This repo contains login page component.

## Overview
Login page component is a streamlit functional component, that requires user to fill account locator, username & password. 
Once the values are filled sing up button gets enabled, clicking which will show a toast message indicating successful login.

## Quickstart

* Ensure you have [Python 3.6+](https://www.python.org/downloads/), [Node.js](https://nodejs.org), and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
* Clone this repo.
* Create a new Python virtual environment:
```
$ cd StreamLitLoginPage
$ python3 -m venv venv  # create venv
$ . venv/bin/activate   # activate venv
$ pip install streamlit # install streamlit
```
* Initialize and run the component frontend:
```
$ cd StreamLitLoginPage/login_page/frontend
$ yarn  # Install npm dependencies
$ yarn start  # Start the Webpack dev server
```
* From a separate terminal, run the template's Streamlit app:
```
$ cd StreamLitLoginPage
$ . venv/bin/activate  # activate the venv you created earlier
$ streamlit run login_page/__init__.py  # run the example
```
* If all goes well, you should see something like this:
![Login Page](loginPage.png)
