import { Heading } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

const ScoreCard = ({len}) => {

    const handleClick = () => {
        window.location.reload(true);
    }

    return (
            <Box>
                <Heading size="lg" as="h1" fontWeight="600">Your Score</Heading>
                <Heading size="md" as="h2" fontWeight="700">{len}</Heading>
                <button onClick={handleClick}>Play again?</button>
            </Box>        
    )
}

export default ScoreCard;
