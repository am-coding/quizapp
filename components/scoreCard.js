import { Heading } from "@chakra-ui/react"
import { Box, Button } from "@chakra-ui/react"

const ScoreCard = ({len}) => {

    const handleClick = () => {
        window.location.reload(true);
    }

    return (
            <Box bgColor="#fafafa" borderRadius="20px" border="1.5px">
                <Heading size="lg" as="h1" fontWeight="600">Your Score was {len}</Heading>
                {/* <Heading size="md" as="h2" fontWeight="700"></Heading> */}
                <Button colorScheme="teal" variant="outline" size="md" border="2px" mt="2" mb="5" onClick={handleClick}>Play Again?</Button>
            </Box>        
    )
}

export default ScoreCard;
