/** @jsxImportSource theme-ui */
import { jsx, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column';
// import Pencil from '../assets/key-feature/pencil.svg';
// import Blueprint from '../assets/key-feature/blueprint.svg';
// import AssemblyLine from '../assets/key-feature/assembly.svg';

const data = [
  {
    id: 1,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675324388/ProjectFootwear/pencils_hav63s.svg',
    altText: 'Product Direction',
    title: 'Product Direction',
    text:
      'We learn the history and current state of your product to determine the direction for success',
  },
  {
    id: 2,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675324332/ProjectFootwear/blueprint_mkkoy7.svg',
    altText: 'Product Need',
    title: 'Product Need',
    text:
      'Determine product needs, by considering gender, type of shoe, necessary materials, quality and price levels to decide manufacturing direction',
  },
  {
    id: 3,
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1675324419/ProjectFootwear/assembly_rnftpi.svg',
    altText: 'Factory Profiles',
    title: 'Factory Profiles',
    text:
      'Given the brand concept and your needs, we match your product to the right factory and help you grow a lasting relationship with them',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="process">
      <Container>
        <SectionHeader
          slogan="Process Breakdown"
          title="Our Process"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              imgSrc={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
