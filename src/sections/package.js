/** @jsxImportSource theme-ui */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Basic',
    description: 'For Small teams or office',
    buttonText: 'Contact Us',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'TBD unavailable',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'TBD unavailable',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For startup enterprise',
    buttonText: 'Contact Us',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'TBD available',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricingPlain}>
      <Container>
        <SectionHeader
          title="How we price"
          slogan="Pricing Breakdown"
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricingPlain: {
    backgroundColor: 'white',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
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
};
