/*
 * Fullstack Mooc 2020
 * osa1, unicafe
 * Katja Wallenius
 *
 */

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const StatisticsLine = ({text, value}) => {

  return(
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  
  if ((good + bad + neutral) === 0) {
    return(
        <p>
          No feedback given.
        </p>
    )
  }
  else {
    return(
      <div>
        <table>
          <tbody>
            <StatisticsLine text={'good'} value={good}/>
            <StatisticsLine text={'neutral'} value={neutral}/>
            <StatisticsLine text={'bad'} value={bad}/>
            <StatisticsLine text={'all'} value={total}/>
            <StatisticsLine text={'average'} 
            value={(good-bad)/total}/>
            <StatisticsLine text={'positive (%)'} 
            value={good/total*100}/>
          </tbody>
        </table>
      </div>    
    )
  }
}

const MyButton = (props) => {

  return(
      <Button 
        onClick={props.handleClick}
        variant="contained" 
        color="primary"
        style={{margin: 2}}
      >
        {props.text}
      </Button>
  )

}

const Unicafe = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  
  return(

    <div style={{marginLeft:'5%'}}>
      <h1>Give feedback</h1>
      <p>How was your visit to Unicafe today?</p>
      <MyButton text={'good'} handleClick={handleGood}/>
      <MyButton text={'neutral'} handleClick={handleNeutral}/>
      <MyButton text={'bad'} handleClick={handleBad}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )

}

export default Unicafe;

