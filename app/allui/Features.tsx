import { Box, HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from './Icons';

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
  
    <HStack {...rest} spacing='24px'>
      <Icon as={icon} boxSize='48px' />
      <Text textAlign='left' fontSize='18px' fontWeight='700'>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
   
    <Box maxW='1024px' m='auto' pt='60px' pb='32px' as='section'  bgGradient={[
        'linear(to-tr,  pink.3000, pink.800)',
        'linear(to-t, pink.500,purple.900)',
        'linear(to-b, pink.600, pink.300)', 
      ]}>
      <HStack px='48px' spacing='20px'>
       <Box  _hover={{ borderRadius:"149px" ,  bgGradient:
            'linear(to-tr, blue.300, pink.400)',
          
       
            }}  border='1px' m={2} borderColor='gray.200'  alignContent='center' alignItems='center'>
        <Feature  icon={MoneyBackGuaranteeIcon} alignContent='center'  pl={4}>   30 days money back Guarantee
            </Feature>
            </Box>
            <Box  _hover={{ borderRadius:"149px" 
           } }
          margin='auto'
          bgGradient={[
            'linear(to-tr, teal.300, pink.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b,pink.100, purple.300)',
          ]}  border='1px' m={2} borderColor='gray.200'  alignContent='center' alignItems='center'>          
            <Feature icon={HassleFreeIcon}  >No setup fees 100% hassle-free</Feature></Box>
            <Box  _hover={{ borderRadius:"149px" 
           } }  border='1px' m={2} borderColor='gray.200'  alignContent='center' alignItems='center'> <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Box>
         
       
      </HStack>
    </Box>
  );
}