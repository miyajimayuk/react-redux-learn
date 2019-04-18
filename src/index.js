import React from 'react';
import ReactDOM from 'react-dom';
import EventsIndex from './components/events_index';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <EventsIndex />
    </Provider>,
    document.getElementById('root')
);

