import React from 'react';
import './App.css';
import Colors from "./Colors"
import ContextProvider from "./Context"
function App() {
  return (
    <div>
      <ContextProvider>
     <Colors />
     </ContextProvider>
    </div>
  );
}

export default App;