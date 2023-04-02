import { type } from 'os';
import React, { useState } from 'react';
import { TodoList } from "./components/organisms/TodoList";
import { AppTemplate } from "./components/templates/AppTemplate";
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <AppTemplate>
          <TodoList />
        </AppTemplate>
      </React.Fragment>
    </div>
  );
}
export default App;
