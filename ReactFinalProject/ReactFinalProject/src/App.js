import React, {Component} from 'react';
import Header from './Header';
import {BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import Form from './Form';

const styles = {
    bodyWrapper: {
        display: 'flex', 
        height: '100vh',
        backgroundColor: '#8FBC8F'
    }
}
const app = () => {
    return (
        <BrowserRouter>
        <div className="App">
        <Header />
        <div style ={styles.bodyWrapper}>
            <ContactList />
            <Switch>
            <Route path='/:listId' component={Form} />
            <Redirect from='/' to='/1' />
            </Switch>
        </div>
        </div>
        </BrowserRouter>
    );
}

export default app; 