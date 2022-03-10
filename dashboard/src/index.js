import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import customReducers from './reducers'
import createAdminStore from './store'
import { Provider } from 'react-redux'
import { DataProviderContext, Resource } from 'react-admin'
import { dataProvider, history } from './providers'
import customSagas from './sagas'
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { theme } from './styles';

const Index = () => (
    <Provider store={createAdminStore({
        dataProvider,
        history,
        customReducers,
        customSagas
    })}>
        <DataProviderContext.Provider value={dataProvider}>
            <Resource name='dashboard' intent="registration" />
            <Resource name='applications' intent="registration" />
            <Resource name='users' intent="registration" />
            <Resource name='categories' intent="registration" />
            <Resource name='communities' intent="registration" />
            <Resource name="parishes" intent="registration" />
            <Resource name="categorias" intent="registration" />
            <Resource name="roles" intent="registration" />

            <ConnectedRouter history={history}>
                <ThemeProvider theme={createTheme(theme)}>
                    <App />
                </ThemeProvider>
            </ConnectedRouter>
        </DataProviderContext.Provider>
    </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
