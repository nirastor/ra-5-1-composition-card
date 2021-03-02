/*
  Вопрос:
    При композиции компонентов нужно понимать какую именно разметку отдавать в компонент.
    Например, помнить что компонент это карточка и className называть card-title, card-text
    Это не нарушет принцип что снаружи компонента не надо знать как он работает?
*/

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './logo.svg';
import Card from './componens/Card';

import './App.css';

function App() {
  return (
    <div className="app">
      <Card logo={logo}>
        <h5 className="card-title">Заголовок</h5>
        <p className="card-text">Какой-то один текст первой карточки, первой карточки иои первой карточки</p>
        <a href="#" className="btn btn-primary">Жми смелее</a>
      </Card>
      <Card>
        <h5 className="card-title">Без картинки</h5>
        <p className="card-text">Карточка без картинки с каим-то рыбным описанием. Все то приходит через чилдрен. А насколько это правильно</p>
        <a href="#" className="btn btn-primary">Кнопка, тыц!</a>
      </Card>
      <Card>
        <p>
          <span>Эта карточка только с текстом и без стилей на голых абзацах. </span>
          <span>Например кто-то вообще не знает, что там внутри карточки</span>
        </p>
      </Card>
    </div>
  );
}

export default App;
