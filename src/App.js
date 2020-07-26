import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import BookingNew from './components/views/BookingNew/BookingNew';
import Events from './components/views/Events/Events';
import EventsNew from './components/views/EventsNew/EventsNew';
import Order from './components/views/Order/Order';
import OrderNew from './components/views/OrderNew/OrderNew';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F'},
    //secondary: { main: '#11cb5f'},
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/booking/booked/:id`} component={Booking} />
              <Route exact path={`${process.env.PUBLIC_URL}/booking/new`} component={BookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/events/event/:id`} component={Events} />
              <Route exact path={`${process.env.PUBLIC_URL}/events/new`} component={EventsNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/order/order/:id`} component={Order} />
              <Route exact path={`${process.env.PUBLIC_URL}/order/new`} component={OrderNew} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
