import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            quas! Accusamus aliquid, culpa delectus quas dignissimos a, omnis
            quam iusto quibusdam architecto nam, deleniti dolorem eligendi
            numquam nemo molestiae sapiente! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Maxime, repudiandae dolore fugiat
            doloremque accusantium expedita numquam omnis nam velit animi fugit
            neque voluptatem debitis adipisci a ab minima nesciunt reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            quas! Accusamus aliquid, culpa delectus quas dignissimos a, omnis
            quam iusto quibusdam architecto nam, deleniti dolorem eligendi
            numquam nemo molestiae sapiente! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Maxime, repudiandae dolore fugiat
            doloremque accusantium expedita numquam omnis nam velit animi fugit
            neque voluptatem debitis adipisci a ab minima nesciunt reiciendis?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoFocus
    infiniteLoop
    interval={500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" height={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>
    <Box w="full" height={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" height={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" height={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
