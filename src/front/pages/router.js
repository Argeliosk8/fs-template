import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { MasterHeader } from '../components/masterHeader';
import AnotherView from './anotherView';
import ThirdView from './thirdView';
import Root from './root';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<Root />}> 
      <Route path="/" element={<MasterHeader />} />
      <Route path="/another" element={<AnotherView />} />
      <Route path="/third" element={<ThirdView />} />
    </Route>
  )
)

export default router;