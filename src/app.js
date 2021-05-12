import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById("app"));
