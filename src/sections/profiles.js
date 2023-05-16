/** @jsxImportSource theme-ui */
import React from 'react';

import { jsx, Container, Grid, Button, Image } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card';

const data = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683174693/ProjectFootwear/leather_footbed_ale6wx.jpg',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704136/ProjectFootwear/italy_taicqm.svg',
    altText: 'Italy Flag',
    title: 'Italy Flag',
    profileDetails: {
      country: 'Italy',
      specialty: 'Leather Footbed Sandals',
      moq: '360/style, 120/color',
      price: '$20 - $30',
      capacity: '10,000'
    }
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683174641/ProjectFootwear/synthetic_boots_v2al03.jpg',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704588/ProjectFootwear/china_kcwjwu.svg',
    altText: 'China Flag',
    title: 'China Flag',
    profileDetails: {
      country: 'China',
      specialty: 'Synthetic Boots and Casuals',
      moq: 'Style/600, Color/300',
      price: '$15 - $45',
      capacity: '10,000'
    }
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683174859/ProjectFootwear/all_shoes_spvfrb.jpg',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683171042/ProjectFootwear/brazil_seynvo.svg',
    altText: 'Brazil',
    title: 'Brazil',
    profileDetails: {
      country: 'Brazil',
      specialty: 'Womens Leather Casuals',
      moq: 'Style/600, Color/300',
      price: '$18 - $40',
      capacity: '10,000'
    }
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683174523/ProjectFootwear/better_class_dress_qjkfxw.jpg',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675704588/ProjectFootwear/china_kcwjwu.svg',
    altText: 'Brazil',
    title: 'Brazil',
    profileDetails: {
      country: 'China',
      specialty: 'Various (Cement Construction) - Special Materials',
      moq: 'Style/600, Color/300',
      price: '$15 - $45',
      capacity: '10,000'
    }
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683174593/ProjectFootwear/leather_sandals_opy9ff.jpg',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1683171107/ProjectFootwear/india_flag_swyx9q.svg',
    altText: 'India',
    title: 'India',
    profileDetails: {
      country: 'India',
      specialty: 'Womens Leather Sandals',
      moq: 'Style/360, Color/180',
      price: '$8 - $18',
      capacity: '10,000'
    }
  }
];

const LIMIT = 6;
const EXPAND_ICON = "https://res.cloudinary.com/bytesizedpieces/image/upload/v1675708349/ProjectFootwear/downArrows_fabyvk.svg";
const COLLAPSE_ICON = "https://res.cloudinary.com/bytesizedpieces/image/upload/v1675930087/ProjectFootwear/collapse_m2ub1z.svg";
export default class Feature extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isExpanded: false
    };

    if (data.length <= LIMIT) {
      this.initialData = data;
      this.remainder = [];
    } else {
      this.initialData = data.slice(0, LIMIT);
      this.remainder = data.slice(-1 * LIMIT);
    }
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
            title="Some of our partners"
          />

          <Grid sx={styles.grid}>
            {
              this.initialData.map(({id, src, imgSrc, title, profileDetails = {}}) => (
                <ProfileCard
                  key={id}
                  src={src}
                  id={id}
                  imgSrc={imgSrc}
                  title={title}
                  profileDetails={profileDetails}
                />
              ))
            }
            {
                isExpanded && this.remainder.length > 0 ? (
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
                ) : this.remainder.length > 0 ? (
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
                ) : null
            }
          </Grid>
        </Container>
      </section>
    );
  }
}

class ProfileCard extends React.PureComponent {
  render() {
    const { id, src, imgSrc, title, profileDetails = {} } = this.props;

    return (
      <FeatureCard
        key={id}
        src={imgSrc}
        alt={title}
      >
        <Image src={src} sx={{'width': '300px'}} />
        <span>
          <span sx={styles.wrapper.title}>Country: </span>
          <span>{profileDetails.country}</span>
        </span>
        <span>
          <span sx={styles.wrapper.title}>Specialty: </span>
          <span>{profileDetails.specialty}</span>
        </span>
        {/*<span>
          <span sx={styles.wrapper.title}>Capacity: </span>
          <span>{profileDetails.capacity}</span>
        </span>*/}
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
      '90px 50px',
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
