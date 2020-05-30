import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addReminder, deleteReminder } from './store/actions';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function App() {
  const reminder = useSelector((state) => state.reminders);
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const addingReminder = (text, date) => dispatch(addReminder(text, date));
  const removeReminder = (id) => dispatch(deleteReminder(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return null;
    }
    addingReminder({
      text: value,
      id: uuidv4(),
      date: date,
    });
    setValue('');
  };
  return (
    <div onSubmit={handleSubmit} className='App'>
      <div className='title'>REMINDER</div>
      <form className='form'>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='I need...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            className='form-control'
            type='datetime-local'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button variant='success' type='submit'>
          Add reminder
        </Button>
      </form>
      {!reminder.length ? (
        <p>Nothing to remind about</p>
      ) : (
        <ul className='list-group col-sm-4'>
          {reminder.map((rem) => {
            return (
              <li key={rem.id} className='list-group-item'>
                <div className='list-item'>
                  <div>{rem.text}</div>
                  <div>
                    <em>{moment(new Date(rem.date)).fromNow()}</em>
                  </div>
                </div>
                <div
                  className='list-item delete-button'
                  onClick={() => removeReminder(rem.id)}
                >
                  &#x2715;
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
