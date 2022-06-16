import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Transporte Terrestre Local',
      text:
        "Desarrollamos soluciones logísticas de acuerdo con las exigencias específicas de cada carga. Contamos con la mejor oferta de transporte terrestre de mercancías y brindamos confiabilidad y flexibilidad que nuestros clientes necesitan.",
      image:
        'https://res.cloudinary.com/leurjim/image/upload/v1655048122/bernd-dittrich-eCc7FjMoR74-unsplash_c4wbcu.jpg',
    },
    {
      title: 'Transporte Aéreo',
      text:
        "Envíos rápidos por su naturaleza y con la posibilidad de llegar a cualquier parte del mundo con fecha de entrega asegurada y máximas garantías. Operación controlada y supervisada de inicio a fin.",
      image:
        'https://res.cloudinary.com/leurjim/image/upload/v1655048122/aaron-barnaby-A6HjuUdcURY-unsplash_tujhsc.jpg',
    },
    {
      title: 'Transporte Máritimo',
      text:
        "Facilitamos el comercio internacional con la gestión de reservas y cotizaciones de los servicios de transporte marítimo de mercancías de forma fácil y rápida. ",
      image:
        'https://res.cloudinary.com/leurjim/image/upload/v1655048122/axel-ahoi-hjEesK4KSDs-unsplash_nkinoi.jpg',
    },
  ];

  return (
    <Box
      as='div'
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Container maxW={'7xl'} py={8} as={Stack} spacing={12}>
        <Stack spacing={2} align={'center'}>
          <Heading
            fontSize={'xl'}
            fontWeight='bold'
            color='primary'
          >
            Ofrecemos alta calidad comercial y Servicios
          </Heading>
          <Text
            fontSize={'2xl'}
            fontWeight='bold'
            textAlign={'center'}
          >
            Algunos servicios Top en los que nos especializamos.
          </Text>
        </Stack>
      </Container>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'sm'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="30%"
                backdropFilter='auto'
                backdropBlur='10px'
                borderRadius={10}
                fontWeight='bold'
                transform="translate(0, -50%)">
                <Box backdropFilter='auto' backdropContrast='40%' p={6}>
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="Textgray">
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                    {card.text}
                  </Text>
                </Box>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}