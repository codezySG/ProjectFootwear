/** @jsxImportSource theme-ui */
import { jsx, Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';

import ArrowOdd from '../assets/arrowOdd.png';
import ArrowEven from '../assets/arrowEven.png';

// Configs
import Images from '../configs/images';

const data = [
  {
    id: 1,
    title: 'Product Assessment',
    text:
      'Determine the current needs of your brand concept and direction for the final manufacturing step.',
  },
  {
    id: 2,
    title: 'Factory Profiles',
    text:
      'Go over our partnerships with manufacturers that meet your concept needs and direction.',
  },
  {
    id: 3,
    title: 'Partner Development',
    text:
      'Establish the connection with the right partner for you and finalize agreements.',
  },
  {
    id: 4,
    title: 'Product Development',
    text:
      'With your selected manufacturing partner, begin the development cycle. Merge your concept with factory expertise, or select directly from factory collection, to create a sample that represents your vision',
  },
  {
    id: 5,
    title: 'Manufacturing',
    text:
      'This final and most critical step, made substantially easier due to the previous steps taken.  Your selected product goes through pre-production and QA protocols and onto and through the production line.',
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container sx={{'maxWidth': '1500px !important'}}>
        <SectionHeader
          slogan="Breakdown of our process"
          title="Steps"
          isWhite
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${Images.patternBg})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 50px',
      null,
      '50px 25px',
      null,
      null,
      '50px 25px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(5,1fr)',
    ],
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '100%', '100%'],
    mx: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      opacity: 0.3,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      textAlign: 'center',
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },
};
