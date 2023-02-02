/** @jsxImportSource theme-ui */
import { jsx, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column';
import Pencil from '../assets/key-feature/pencil.svg';
import Blueprint from '../assets/key-feature/blueprint.svg';
import AssemblyLine from '../assets/key-feature/assembly.svg';

const data = [
  {
    id: 1,
    svg: Pencil,
    altText: 'Design and Development',
    title: 'Design and Development',
    text:
      'With industry leading software, we guide you through the design and development process step-by-step to ensure your ultimate satisfication with your shoe.',
  },
  {
    id: 2,
    svg: Blueprint,
    altText: 'Pre Production',
    title: 'Pre Production',
    text:
      'We handle the technical process of pre production when it comes to your vision.',
  },
  {
    id: 3,
    svg: AssemblyLine,
    altText: 'Production',
    title: 'Production',
    text:
      'We work on the manufactoring process with production lines to make your shoe a reality.',
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
              svg={item.svg}
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
