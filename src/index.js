import React from 'react';
import ReactDOM from 'react-dom';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import WatchApp from './framework';
import ElevatorPitchScreen from './app/pages/ElevatorPitchScreen/ElevatorPitch';
import ConfirmationScreen from './app/pages/ConfirmationScreen/ConfirmationScreen';
import YourPage from './app/pages/PlaySpace/YourPage';
import QuestionScreen from './app/pages/QuestionScreen/QuestionScreen';
import WelcomeScreen from './app/pages/WelcomeScreen/WelcomeScreen';
import FinalScreen from './app/pages/FinalScreen/FinalScreen';
import questions from './app/data/questions.json';
import ActivityScreen from './app/pages/ActivityScreen/ActivityScreen';
import ResultScreen from './app/pages/ResultScreen/ResultScreen';

const question = {
  question: '1 + 2 = ',
  top: '1',
  bottom: '2',
  left: '3',
  right: '4',
  answer: '3',
};


const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/elevatorpitch', Component: ElevatorPitchScreen },
  { path: '/confirmation', Component: ConfirmationScreen, props: { ...question } },
  { path: '/yourpage', Component: YourPage },
  { path: '/question',
    Component: QuestionScreen,
    props: { ...questions[Math.floor(Math.random() * questions.length)] } },
  { path: '/final', Component: FinalScreen },
  { path: '/welcome', Component: WelcomeScreen },
  { path: '/activity', Component: ActivityScreen },
  { path: '/result', Component: ResultScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />, document.getElementById('root'));
