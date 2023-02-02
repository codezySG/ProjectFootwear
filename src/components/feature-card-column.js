/** @jsxImportSource theme-ui */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({
  imgSrc: src,
  svg: SVG,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      {
        SVG ? <SVG /> : <Image src={src} alt={altText} sx={styles.img} />
      }
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: [2, null, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
    },
  },
};
