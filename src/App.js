import './App.css';
import React, { useContext } from 'react';
import {RouterProvider} from "react-router-dom";
import { ContextWrapper } from './front/store/contextWrapper';
import router from './front/pages/router';


function App() {
  const context = useContext(ContextWrapper)
  return (
    <React.StrictMode>
      <ContextWrapper value={context}>
        <RouterProvider router={router} />
      </ContextWrapper>
  </React.StrictMode>
  );
}

export default App;
