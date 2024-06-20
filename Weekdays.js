import React, { useReducer } from 'react';

const initialState = { Day: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'Monday':
      return { Day: 'Monday' };
    case 'Tuesday':
      return { Day: 'Tuesday' };
    case 'Wednesday':
      return { Day: 'Wednesday' };
    case 'Thursday':
      return { Day: 'Thursday' };
    case 'Friday':
      return { Day: 'Friday' };
    case 'Saturday':
      return { Day: 'Saturday' };
    case 'Sunday':
      return { Day: 'Sunday' };
    case 'Reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

function MyButtons() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDayClick = (day) => {
    dispatch({ type: day });
  };

  return (
    <div>
      <p className='bg-dark text-white'>Day of the week: {state.Day}</p>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Monday')}>Monday</button>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Tuesday')}>Tuesday</button>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Wednesday')}>Wednesday</button>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Thursday')}>Thursday</button>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Friday')}>Friday</button>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Saturday')}>Saturday</button>
      <button className='bg-primary text-white' onClick={() => handleDayClick('Sunday')}>Sunday</button>
      <button className='bg-secondary text-white' onClick={() => handleDayClick('Reset')}>Reset</button>
    </div>
  );
}

export default MyButtons;
