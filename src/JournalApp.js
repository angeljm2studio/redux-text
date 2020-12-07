import React from 'react';
import { AppRouter } from './routers/AppRouter';
import {Provider} from 'react-redux'
import { store } from './stote/store';



export const JournalApp = () => {
    return (
    <Provider store={store}>
        <AppRouter />
        </Provider>
    )
}
