# React Performance

## The Motivation
I was working on the react UI for tracking a poker game. The screen shows a list of players

![vertical list of players in a poker game](/img/list-of-players.png)

Selecting the name of a player brings up a modal dialog to edit the player

![modal dialog to edit a player](/img/expanded-player.png)

Closing the dialog does not change any values for the player. 

The question I wanted to answer is: why is it that each react component in the list of players rerenders?

## Ways to see if a component renders
I started tracking if a component renders by adding *console.log('...')* statements in the rendering of the react component. 
That got quickly became tedious. I then installed the React DevTools to use the profilier.

[Introducing the React Profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)

## Running this project
Download this project to you local computers.

Reading the steps below you see that I am using
* node: 18.12.1
* npm: 8.19.2

So it is as simple as running
* _npm install_
* _npm start_

## Has State
Clicking on the *Has State* button brings up a screen with the child components timestamped and overlaid by a modal dialog.

![react Has State list of components overlaid by a modal dialog](/img/Has-State-modal.png)

Clicking the *Close* button results it the dialog being dismissed and the parent component (ParentHasState) being rendered.
Note that the timestamps change on the children components that rerender

![react Has State list of components after dismissing the modal dialog](/img/Has-State-no-modal.png)

Looking at the ParentHasState.js file you will see all the state defined 
```
  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name');

  const logTime = (from) => console.log('In logTime, from ' + from + ' ' + Date.now());

  // hook to memorize the function
  const logTime2 = useCallback(
    (from) => {
      console.log('In LogTime2, from ' + from + ' ' + Date.now())    },
    [],
  );
```
pay attention to the comments (React.memo is explained in the next section)
```
  return (
    <>
      {console.log('rendering ParentHasState')}
      <h1>Has State</h1>
      {/* The following have no memo so they always render when this parent renders*/}
      <Childnopropsnomemo/>
      <Childnamepropnomemo name={name}/>
      <Childfunctionpropnomemo logTime={logTime}/>
      <Childcallbackfunctionpropnomemo logTime2={logTime2}/>

      <br/>

      {/* Memoed child does not rerender when this parent rerenders because
          there are no props and hence they have not changed */}
      <Childnopropswithmemo/>

      {/* Memoed child does not rerender when this parent rerenders
          unless the name prop changed */}
      <Childnamepropwithmemo name={name}/>

      {/* Does render even though the child is memoed because the reference
          to the function passed in props is always different  */}
      <Childfunctionpropwithmemo logTime={logTime}/>

      {/* Memoed child does not render when this parent renders because the
          reference to the function passed in props is memoed by useCallback */}
      <Childcallbackfunctionpropwithmemo logTime2={logTime2}/>

      <Mymodal showModel={showModel} setShowModel={setShowModel} setName={setName}/>
    </>
  );
```
The comments tell all
1. use [React.memo](https://react.dev/reference/react/memo) for a component and the component only rerenders if the props have change
2. use the [useCallback](https://legacy.reactjs.org/docs/hooks-reference.html#usecallback) hook to memoize a function

## React.memo
The [memo](https://react.dev/reference/react/memo) description says 

> lets you skip re-rendering a component when its props are unchanged.

## Has Custom Hook
Clicking the *Has Custom Hook* button renders the ParentHasCustomHook component. The state is in the useCustomHook.js file
```
export default function useCustomHook() {
  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name');
  const logTime = (from) => console.log('In logTime, from ' + from + ' ' + Date.now());
  const logTime2 = useCallback(
    (from) => {
      console.log('In LogTime2, from ' + from + ' ' + Date.now())    },
    [],
  );
  return {
    showModel,
    setShowModel,
    name,
    setName,
    logTime,
    logTime2
  }
}
```
and the ParentHasCustomHook.js uses that custom hook
```
  const {
    showModel,
    setShowModel,
    name,
    setName,
    logTime,
    logTime2
  } = useCustomHook();
```
The result of using and custom hook is the same as [Has State](https://github.com/gpratte/react-performance/tree/step-04-flesh-out-readme#has-state) section above.

## Is Context Provider
Clicking the *Is Context Provider* button renders the ParentIsContextProvider component.
This component is the context provider for the _name_. The code follows. Pay attention to the comments
```
  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name ' + getTime());
  return (
    <ParentContext.Provider value={{name}}>
      {console.log('rendering ParentIsContextProvider')}
      <h1>Is Context Provider</h1>
      {/* No memo so it always render when this parent renders*/}
      <Childnamefromprovidernomemo/>
      {/* Will rerender because of the useContext hook even though is uses memo
          https://legacy.reactjs.org/docs/hooks-reference.html#usecontext */}
      <Childnamefromproviderwithmemo/>
      <Mymodal showModel={showModel} setShowModel={setShowModel} setName={setName}/>
    </ParentContext.Provider>
  );
```
Since the state is in the context and not in props the memo does no good. 
> When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext

Clicking on the *Is Context Provider* button and then dismissing the modal dialog will show that both 
children rerender.

# Steps
## step 04 flesh out readme
Fleshed out all of the readme content about these list of steps

## step 03 render state
Parent component that either
* has state
* uses custom hook
* is a context provider
with children components and a modal dialog.

The children are duplicated using React.memo.

Which children rerender when the modal dialog is dismissed?

Look the the react devtools flamegraph to see why a child rerendered.

## step 02 react router
Added the react routing dependency.
* _npm i --save react-router-dom_

## step 01 add bootstrap
Added the react-bootstrap dependency
* _npm install --save react-bootstrap bootstrap_

Imported the bootstrap css

    import 'bootstrap/dist/css/bootstrap.min.css';

Coded a simple bootstrap Container in the App component.

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
