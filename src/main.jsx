import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from  "react-redux"
import { store } from './assets/component/utils/Redux/store.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
    </Provider>
  </StrictMode>
);
