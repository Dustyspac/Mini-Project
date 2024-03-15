import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux";
import store from './Redux/store/configStore';
import { BrowserRouter } from "react-router-dom";


const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false, notifyOnChangeProps: 'tracked',}}});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
    </Provider>
  </QueryClientProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

