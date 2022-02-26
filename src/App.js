import './App.css';


function App() {
  return (
  <div>
    <head>
    <title>Udacity Todos Goals</title>
    </head>
    <body>
    <h1>Todo List</h1>
    <input id='todo' type='text' placeholder='Add Todo' />
    <button id='todoBtn'>Add Todo</button>
    <ul id='todos'></ul>
  
  
    <h1>Goals</h1>
    <input id='goal' type='text' placeholder='Add Goal' />
    <button id='goalBtn'>Add Goal</button>
    <ul id='goals'></ul>
    </body>
  </div>
  );
}

export default App;
