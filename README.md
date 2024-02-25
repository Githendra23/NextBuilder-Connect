# NextBuilder Connect

A web application aims to allow users to create accounts, authenticate themselves, and then display articles from the CMS Builder.io, along with navigating between pages.

## Technology used

**Backend:**

<a href="https://nodejs.org/docs/latest/api/" target="_blank"><img src="https://img.icons8.com/fluency/48/node-js.png"/></a>
<a href="https://expressjs.com/en/5x/api.html" target="_blank"><img src="https://img.icons8.com/fluency/48/express-js.png"/></a>
<a href="https://dev.mysql.com/doc/" target="_blank"><img height="48" width="48" src="https://cdn.icon-icons.com/icons2/1381/PNG/512/mysqlworkbench_93532.png"/></a>

**Frontend:**

<a href="https://legacy.reactjs.org/docs/getting-started.html"><img width="auto" height="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react"/></a>
<a href="https://nextjs.org/docs"><img src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/></a>
<a href="https://www.typescriptlang.org/docs/"><img width="48" height="48" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript"/></a>

## Database

![db](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/f2264e8b-60f2-4a01-aaf9-e357f20caf57)

## The necessary steps to configure and install the project on a new environment

### Installation of software

To make the application work, you need to install:

<a href="https://nodejs.org/en/download" target="_blank"><img src="https://img.icons8.com/fluency/48/node-js.png"/></a>
<a href="https://www.wampserver.com/en/download-wampserver-64bits/"><img width="48" height="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/WampServer-logo.svg/1200px-WampServer-logo.svg.png"/></a>
<a href="https://dev.mysql.com/downloads/workbench/" target="_blank"><img height="48" width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/2048px-Antu_mysql-workbench.svg.png"/></a>

After installing these three softwares, start the WAMP SERVER software to launch a local server on your machine.

You should see the WAMP logo at the bottom right; wait until it turns green. (If the logo does not turn green, click on it and restart its services.)

![rectangle](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/195adc12-f300-4df8-b535-84f50af1061f)

Download the project:
```cmd
git clone https://github.com/Githendra23/NextBuilder-Connect.git
```
Then, open the file "**db_app.mwb**" located in the folder *backend/db*.

By clicking on the file, you will open the MySQL Workbench software. In the software, click on *Database -> Forward engineer...* in the menu bar.

![rectangle](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/b2604c76-8d74-406e-b2bd-6439343e5f7b)

Fill in the information displayed in the image below.

![image](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/4790347f-3921-4892-9654-7f6f31101368)

Click on the Next button, continuing to click until everything is correct, then close the software. <br>
You have now installed the database on your local server on your machine.

### Launching the API and the website

To launch the web application, you must first start the API, and then the site.

To launch the API, open the terminal, then navigate to the folder "**backend**" with the command *cd*.
```cmd
cd <path inside the folder "backend">
```

Then, execute:
```cmd
node app.js
```

In another terminal, navigate to the folder "**frontend**" and execute:
```cmd
npm run dev
```

Click or copy-paste the provided link into your browser to access the website.

:fireworks: **You have successfully configured and installed the project in your environment** :tada:
