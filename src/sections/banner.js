/** @jsxImportSource theme-ui */
import { jsx, Link as ThemeLink } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import FormConfig from '../configs/forms';

// Configs
import Images from '../configs/images';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <h1 id="mainHeading" sx={{'variant': 'text.heroPrimary'}}>
            Have a unique brand concept, <span sx={{'color': '#ff8400'}}>but missing the factory partner?</span>
          </h1>
          <Text as="p" variant="heroSecondary">
            <p sx={{'fontSize': ['18px', '24px'], 'fontWeight': '600', 'marginBottom': '18px'}}>We have a plan for your footwear project!<br /></p>
            We have the connections to the right manufacturers and help facilitate strong lasting relationships.
          </Text>
          <Button
            variant="orangeButton"
            aria-label="Contact Us"
            sx={{'display': ['none', 'none', 'none', 'block', 'block'], 'mb': '80px'}}
          >
            <ThemeLink sx={{ 'variant': 'links.default', 'color': 'white' }} href={FormConfig.contactUsGoogleSheet}>Contact Us</ThemeLink>
          </Button>
        </Box>

        <Box sx={{'marginTop': '60px', 'display': ['none', 'none', 'none', 'none', 'block']}}>
          <Image sx={{'width': ['800px']}} src={Images.bannerThumb} alt="banner" />
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
      padding: '0px !important'
    },
    contentBox: {
      width: ['100%', null, '85%', '100%', '50%', '60%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    }
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
