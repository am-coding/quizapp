import { Heading } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { useRadio, useRadioGroup, HStack } from "@chakra-ui/react"

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box bgColor="red" as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={4}
          py={2}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

  function Example({options, ioptions, handleClick}) {
    const data = [];
    ioptions.map((i) => {
        data.push(i)
    })
    data.push(options)
    const click = (nextValue) => {
       if (options === nextValue) {
        handleClick(nextValue)
       } else {
         console.log("wrong lol");
       }
    }
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      defaultValue: "react",
      onChange: click,
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {data.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }
  

const QuizCard = ({question, correct_answer, incorrect_answers, handleClick}) => {
    return (
            <Box style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Heading size="md" as="h1" fontWeight="600">{question}</Heading>
                <Example
                 options={correct_answer}
                 ioptions={incorrect_answers}
                 handleClick={handleClick}
                 />
            </Box>        
    )
}

export default QuizCard;
