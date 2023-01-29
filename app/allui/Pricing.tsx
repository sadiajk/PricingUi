import { Collapse, Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'




import {Button,
    Flex,Box,
    Heading,
    HStack,
    Icon,
    Stack,
    StackProps,
    Text} from "@chakra-ui/react";



    

    export function ListItem(props: StackProps) {

    const { children, ...rest } = props;
    return (<HStack as="li" spacing='23px' {...rest}>
        <Text>{children}</Text>


    </HStack>);
}


export function Pricing(){
  const { isOpen, onToggle } = useDisclosure();
    return (
        <Box
          maxW='994px'
          width={['100%', 1 / 2, 1 / 4]}
          _hover={{ borderRadius:"149px"}}
          margin='auto'
          bgGradient={[
            'linear(to-tr, teal.300, pink.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b,pink.100, purple.300)',
          ]}
          mt='-160px'
          borderRadius='12px'
          overflow='hidden'
          boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
          textAlign='center'
          as='section'
        >

<Flex>
        <Box  bgGradient={[
    'linear(to-tr, teal.300, pink.400)',
    'linear(to-t, pink.200, teal.500)',
    'linear(to-b, pink.100, purple.300)',
  ]} 

  _hover={{
    bgGradient: 'linear(to-r, blue.100,green.400)',
  }}
  
  p='60px'      borderRadius='150px'>
          <Text fontSize='24px' fontWeight='800'>
            Premium PRO
          </Text>
          <Heading as='h3' fontSize='60px' mt='16px'>
            $329
          </Heading>
          <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>
            billed just once
          </Text>

<Box
  as='button' p={4} color='light purple' fontWeight='bold' borderRadius='lg'
  bgGradient='linear(to-r, purple.500, pink.500)'
  _hover={{
    bgGradient: 'linear(to-r, purple.500, red.500)',
     borderRadius:"14px"
  }}  >    Get Started</Box>

</Box>
<Box p='60px' fontSize='18px'  bgGradient='linear(to-l,pink.500,purple.700)'
_hover={{
    bgGradient: 'linear(to-r, blue.600,green.700)',
  }}   borderRadius='900px'
>

<Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.600'
          rounded='md'
          shadow='md'
        >
<Text textAlign='left' color='white'>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as='ul' spacing='20px' pt='24px' color='white'>
          <ListItem>International calling and messaging API</ListItem>
          <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Collapse>



         
        </Box>
      </Flex>
    </Box>
);}
   

