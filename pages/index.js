import axios from "axios";
import QuizCard from '../components/quizCard';
import { useState } from 'react';

export default function Home({quiz}) {
const [val, setVal] = useState(0);
const [pro, setProgress] = useState([null]);

  const clicked = (progress) => {
    setProgress(pro => [...pro, progress])
    if (val > 8) {
      alert("ran out")
      setVal(0)
    } else {
      const data = val + 1;
      setVal(data)
      console.log(val);
    }    
  }

  console.log(pro);
  console.log(quiz);
  return (
    <>
    <div className="container">
          <QuizCard
          handleClick={clicked}
           question={quiz.results[val].question}
           correct_answer={quiz.results[val].correct_answer}
           incorrect_answers={quiz.results[val].incorrect_answers}
           />
      <button onClick={clicked}>click</button>
    </div>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
  const quiz = await res.data
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      quiz,
    },
  }
}