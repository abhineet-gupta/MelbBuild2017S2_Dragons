import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './framework/components/HomePage/HomePage';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactListScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';

import contacts from './app/data/contacts.json';

const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactListScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
];


ReactDOM.render(<HomePage pages={ pages } />, document.getElementById('root'));

