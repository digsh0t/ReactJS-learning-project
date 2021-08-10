import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const changeYearHandler = (chosenYearData) => {
        props.onYearChange(chosenYearData.target.options[chosenYearData.target.options.selectedIndex].value)
        //console.log(props.target.options[props.target.options.selectedIndex].value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;