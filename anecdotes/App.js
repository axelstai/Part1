import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Votes = ({value}) => <p>Has {value} votes</p>

const TopVotes = ({votes, anecdotes}) => {
  const max = Math.max(...votes)
  console.log('max',max)
  const index = votes.indexOf(max)
  const topAnecdote = anecdotes[index]
  return(
    <div>
      <h1>Top Anecdote</h1>
      <p>{topAnecdote}</p>
    </div>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandom = () => {
    let anecdotesLen = anecdotes.length
    let randomNumber = Math.floor(Math.random() * anecdotesLen)
    setSelected(randomNumber)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
  }

  return (
    <div>
      <h1>anecdote of the day</h1> 
      {anecdotes[selected]}<br></br>
      <Votes value={votes[selected]} />
      <Button handleClick={getRandom} text={'next anectode'} />
      <Button handleClick={vote} text={'vote'} />
      <TopVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App