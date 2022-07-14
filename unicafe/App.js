import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = ({title}) => <h1>{title}</h1>

const Statistics = ({all, good, neutral, bad}) => {

  if(all === 0){
    return <p>No feedback given</p>
  }
  else
    return(
      <table>
        <thead>
          <StatisticLine text="Good" value ={good} />
          <StatisticLine text="Neutral" value ={neutral} />
          <StatisticLine text="Bad" value ={bad} />
          <StatisticLine text="All" value ={all} />
          <StatisticLine text="Avrage" value={(good-bad)/all} />
          <StatisticLine text="positive" value={(good/all)*100 + ' %'} />
        </thead>  
      </table>
    )
}

const StatisticLine= ({text,value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
  
}

const App = () => {
  //adding text
  const buttonText = ['good', 'neutral', 'bad']
  const title = ['Give feedback', 'Statistics']
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

   //Method for handling click
  const handleFeedbackClick = (value) => {
    //add the correct feedback
    if(value === 'good') {
      setGood(good+1)
    }
    if(value === 'neutral') {
      setNeutral(neutral+1)
    } 
    if(value === 'bad') {
      setBad(bad+1)
    }
    //count total clicks
    setTotal(total+1) 
    //get avrage
  }

  return (
  <div>
   <Header title={title[0]}/>
   <Button text={buttonText[0]} handleClick={() => handleFeedbackClick('good')} />
   <Button text={buttonText[1]} handleClick={() => handleFeedbackClick('neutral')} />
   <Button text={buttonText[2]} handleClick={() => handleFeedbackClick('bad')} />
   <Header title={title[1]}/>
   <Statistics all={total} good={good} neutral={neutral} bad={bad} />
   </div>
  )
}

export default App