/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';

// Configs
import Images from '../configs/images';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <h1 id="mainHeading" sx={{'variant': 'text.heroPrimary'}}>
            Have a unique brand concept, <span sx={{'color': '#ff8400'}}>but missing the factory?</span>
          </h1>
          <Text as="p" variant="heroSecondary">
            We have the connections to the right manufacturer and help facilitate strong lasting relationships.
          </Text>
          <Button
            variant="orangeButton"
            aria-label="Contact Us"
            sx={{'display': ['none', 'none', 'none', 'none', 'block'], 'mb': '80px'}}
          >
            Contact Us
          </Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image sx={{'width': ['500px']}} src={Images.bannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${Images.bannerBg})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '60%', '50%', '60%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, null, 'block'],
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      justifyContent: 'center',
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
