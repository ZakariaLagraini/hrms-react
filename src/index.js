import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { configureStore } from './store/configureStore';
import "react-toastify/dist/ReactToastify.min.css"

const store = configureStore()
ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>,
                document.getElementById('root')
);


reportWebVitals();