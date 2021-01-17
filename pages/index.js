import axios from "axios";
import QuizCard from '../components/quizCard';
import { useState } from 'react';
import ScoreCard from '../components/scoreCard';
import { Button, Heading } from "@chakra-ui/react"

export default function Home({quiz}) {
const [val, setVal] = useState(0);
const [pro, setProgress] = useState([]);

  const clicked = (progress) => {
    setProgress(pro => [...pro, progress])
  }

  const nextQ = () => {
    if (val < 9) {
      const data = val + 1;
      setVal(data)
      console.log(val);
    
    } else {
      alert("ran out")
      // setVal(0)  
    }
  }

  console.log(pro);
  
  return (
    <>
    <div className="container">
      <Heading as="h1" size="lg">Play a Tech Quiz!</Heading>
      {
        val < 9 ? 
        <div className="quiz">
        <QuizCard
        handleClick={clicked}
         question={quiz.results[val].question}
         correct_answer={quiz.results[val].correct_answer}
         incorrect_answers={quiz.results[val].incorrect_answers}
         /> 
         <Button colorScheme="teal" variant="outline" size="md" border="2px" mt="12" onClick={clicked, nextQ}>click</Button>
        </div>
         : <ScoreCard 
              len={pro.length}
           />
      }
          
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