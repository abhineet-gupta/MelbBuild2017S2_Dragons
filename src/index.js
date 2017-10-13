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
<<<<<<< Updated upstream
import ActivityScreen from './app/pages/ActivityScreen/ActivityScreen';
import ResultScreen from './app/pages/ResultScreen/ResultScreen';
import questions from './app/data/questions.json';
=======
import FinalScreen from './app/pages/FinalScreen/FinalScreen';

const question = {
  question: '1 + 2 = ',
  top: '1',
  bottom: '2',
  left: '3',
  right: '4',
  answer: '3',
};
//
// const questions = [
//   {
//     question: ' 2 + 2 = ',
//     right: 3,
//     left: 4,
//     top: 5,
//     bottom: 2,
//     answer: 4,
//   }, {
//     question: '3 + 4 = ',
//     right: 3,
//     left: 6,
//     top: 7,
//     bottom: 1,
//     answer: 7,
//   }, {
//     question: '1 + 6 = ',
//     right: 1,
//     left: 4,
//     top: 7,
//     bottom: 9,
//     answer: 7,
//   }, {
//     question: '2 + 3 = ',
//     right: 5,
//     left: 4,
//     top: 6,
//     bottom: 3,
//     answer: 5,
//   }, {
//     question: '1 + 4 = ',
//     right: '1',
//     left: '4',
//     top: '5',
//     bottom: '3',
//     answer: '5',
//   }, {
//     question: '4 + 2 = ',
//     right: '8',
//     left: '6',
//     top: '7',
//     bottom: '4',
//     answer: '6',
//   }, {
//     question: '3 + 5 = ',
//     right: '8',
//     left: '6',
//     top: '7',
//     bottom: '4',
//     answer: '8',
//   }, {
//     question: '6 + 4 = ',
//     right: '9',
//     left: '10',
//     top: '12',
//     bottom: '8',
//     answer: '10',
//   }, {
//     question: '4 + 5 = ',
//     "right": "8",
//     left: '9',
//     top: '4',
//     bottom: '11',
//     answer: '9',
//   }, {
//     question: '8 + 3 = ',
//     right: '8',
//     left: '9',
//     top: '13',
//     bottom: '11',
//     answer: '11',
//   },
// ];
>>>>>>> Stashed changes

const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/elevatorpitch', Component: ElevatorPitchScreen },
  { path: '/confirmation', Component: ConfirmationScreen, props: { ...questions } },
  { path: '/yourpage', Component: YourPage },
<<<<<<< Updated upstream
  { path: '/question',
    Component: QuestionScreen,
    props: { ...questions[Math.floor(Math.random() * questions.length)] } },
  { path: '/welcome', Component: WelcomeScreen },
  { path: '/activity', Component: ActivityScreen },
  { path: '/result', Component: ResultScreen },
=======
  { path: '/question', Component: QuestionScreen, props: { ...question } },
  { path: '/welcome', Component: WelcomeScreen },
  { path: '/final', Component: FinalScreen },
>>>>>>> Stashed changes
];

ReactDOM.render(
  <WatchApp pages={ pages } />, document.getElementById('root'));
