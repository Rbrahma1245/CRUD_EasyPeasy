import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { StoreProvider, createStore } from 'easy-peasy';
import Models from './models/Models';



const store = createStore(Models)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
)
