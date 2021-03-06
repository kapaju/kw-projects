import React, { useState} from 'react';
import Button from '@material-ui/core/Button';

const TopAnecdote = ({anecdotes, votes}) => {
  
  const maxIndex = votes.indexOf(Math.max(...votes))
  const winner = anecdotes[maxIndex]

  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{winner}</p>
    </div>
  )
}

const MyButton = ({text, handleClick}) => {

  return(
    <Button 
      onClick={handleClick}
      variant="contained" 
      color="primary"
      style={{margin: 2}}
    >
      {text}
    </Button>
  )

}

const Anecdotes = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  const selectRandom = () => {
    const random = Math.floor((Math.random()*anecdotes.length))
    setSelected(random)
  }

  return(
    <div style={{marginLeft:'5%', marginRight:'5%', textAlign: 'center'}}>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <MyButton text={'vote'} handleClick={voteAnecdote}/>
      <MyButton text={'next anecdote'} handleClick={selectRandom}/>
      <TopAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default Anecdotes;