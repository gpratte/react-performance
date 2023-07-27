## step 00 create development environment
To get started did the following.

Using the following versions
* node: 18.12.1
* npm: 8.19.2

Create the react app
* _npx create-react-app react-performance_
* _cd react-performance_

Removed the .git directory
* _rm -rf .git_

Created github repository react-performance

Hook up react-performance with the github repository
* _git init _
* _git add ._
* _git commit -m "app created with create-react-app"_
* _git remote add origin git@github.com:gpratte/react-performance.git_
* _git push origin master_

Make sure the initial react application works. Should see the default react page in the web browser at http://localhost:3000/
* _npm start_

Create the first branch
* _git checkout -b step-00-create-development-environment_
* _git push origin step-00-create-development-environment_
