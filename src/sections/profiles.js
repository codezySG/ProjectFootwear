/** @jsxImportSource theme-ui */
import React from 'react';

import { jsx, Container, Grid, Button, Image } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Italy Flag',
    title: 'Italy Flag',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 2,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704588/ProjectFootwear/china_kcwjwu.svg',
    altText: 'China Flag',
    title: 'China Flag',
    profileDetails: {
      country: 'China',
      specialty: 'Sustainable PU Boots',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 3,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704678/ProjectFootwear/india_hfvuwn.svg',
    altText: 'India Flag',
    title: 'India Flag',
    profileDetails: {
      country: 'India',
      specialty: 'Leather Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 4,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Customization',
    title: 'Customization',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 5,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Productivity',
    title: 'Productivity',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 6,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Support',
    title: 'Support',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },


  {
    id: 7,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Customization',
    title: 'Customization',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 8,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Productivity',
    title: 'Productivity',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 9,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Support',
    title: 'Support',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
    {
    id: 10,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Italy Flag',
    title: 'Italy Flag',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 11,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704588/ProjectFootwear/china_kcwjwu.svg',
    altText: 'China Flag',
    title: 'China Flag',
    profileDetails: {
      country: 'China',
      specialty: 'Sustainable PU Boots',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 12,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704678/ProjectFootwear/india_hfvuwn.svg',
    title: 'India Flag',
    altText: 'India Flag',
    profileDetails: {
      country: 'India',
      specialty: 'Leather Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 13,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    title: 'Customization',
    altText: 'Customization',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 14,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Productivity',
    title: 'Productivity',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 15,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Support',
    title: 'Support',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },


  {
    id: 16,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Customization',
    title: 'Customization',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 17,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Productivity',
    title: 'Productivity',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
  {
    id: 18,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Support',
    title: 'Support',
    profileDetails: {
      country: 'Italy',
      specialty: 'Unit Bottom Sandals',
      capacity: '10,000',
      moq: '1200 pps',
      price: '$1,200'
    }
  },
];

const LIMIT = 9;
const EXPAND_ICON = "https://res.cloudinary.com/bytesizedpieces/image/upload/v1675708349/ProjectFootwear/downArrows_fabyvk.svg";
const COLLAPSE_ICON = "https://res.cloudinary.com/bytesizedpieces/image/upload/v1675930087/ProjectFootwear/collapse_m2ub1z.svg";
export default class Feature extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isExpanded: false
    };

    this.initialData = data.slice(0, LIMIT);
    this.remainder = data.slice(-1 * LIMIT);
  }

  toggleAllProfiles = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const { isExpanded = false } = this.state;

    const button = (
      <div sx={{'display': 'flex', 'justifyContent': 'center', alignItems: 'center', 'height': '100%'}}>
          <Button onClick={this.toggleAllProfiles} sx={{...styles.transparent, 'mt': '100px'}}>
            <Image src={isExpanded ? COLLAPSE_ICON : EXPAND_ICON} alt="Expand" sx={styles.img} />
          </Button>
        </div>
    );

    return (
      <section sx={{ variant: 'section.feature' }} id="profiles">
        <Container sx={{display: 'flex', 'flexDirection': 'column'}}>
          <SectionHeader
            slogan="Factory Profiles"
            title="Meet our partners"
          />

          <Grid sx={styles.grid}>
            {
              this.initialData.map(({id, imgSrc, title, profileDetails = {}}) => (
                <ProfileCard
                  key={id}
                  id={id}
                  imgSrc={imgSrc}
                  title={title}
                  profileDetails={profileDetails}
                />
              ))
            }
            {
                isExpanded ? (
                  <>
                    {
                      this.remainder.map(({id, imgSrc, title, profileDetails = {}}) => (
                        <ProfileCard
                          key={id}
                          id={id}
                          imgSrc={imgSrc}
                          title={title}
                          profileDetails={profileDetails}
                        />
                      ))
                    }
                    <div sx={{
                      'width': '100%',
                      position: 'absolute',
                      bottom: '-100px',
                      left: '0px'
                    }}>
                      { button }
                    </div>
                  </>
                ) : (
                  <div sx={{
                    'width': '100%',
                    position: 'absolute',
                    height: '150px',
                    bottom: '0px',
                    left: '0px',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, #FFFFFF 100%)',
                    backgroundBlendMode: 'overlay'
                  }}>
                    { button }
                  </div>
                )
            }
          </Grid>
        </Container>
      </section>
    );
  }
}

class ProfileCard extends React.PureComponent {
  render() {
    const { id, imgSrc, title, profileDetails = {} } = this.props;
console.log(id, title);
    return (
      <FeatureCard
        key={id}
        src={imgSrc}
        alt={title}
      >
        <span>
          <span sx={styles.wrapper.title}>Country: </span>
          <span>{profileDetails.country}</span>
        </span>
        <span>
          <span sx={styles.wrapper.title}>Specialty: </span>
          <span>{profileDetails.specialty}</span>
        </span>
        <span>
          <span sx={styles.wrapper.title}>Capacity: </span>
          <span>{profileDetails.capacity}</span>
        </span>
        <span>
          <span sx={styles.wrapper.title}>Moq: </span>
          <span>{profileDetails.moq}</span>
        </span>
        <span>
          <span sx={styles.wrapper.title}>Price Range: </span>
          <span>{profileDetails.price}</span>
        </span>
      </FeatureCard>
    );
  }
}

const styles = {
  transparent: {
    backgroundColor: 'transparent',
    '&:hover': {
        bg: 'transparent',
        outline: 'none',
        boxShadow: 'none'
      },
  },
  wrapper: {
    title: {
      fontSize: [2, null, null, null, null, 2],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 600,
      mb: [2, null, null, null, null, 3],
      mt: '2px',
    }
  },
  grid: {
    position: 'relative',
    mb: '50px',
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
