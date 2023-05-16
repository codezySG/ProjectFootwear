/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider.js';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import CoreFeature from '../sections/core-feature';
import FactoryProfiles from '../sections/profiles';
import PartnerSection from '../sections/partner';
import WorkFlow from '../sections/workflow';
import TestimonialCard from '../sections/testimonial';
import SecurePayment from '../sections/secure-payment';
import Package from '../sections/package';
import Faq from '../sections/faq';

export default function IndexPage(props) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Project Footwear" />
          <Banner />
          <KeyFeature />
          <CoreFeature />
          <FactoryProfiles />
          { false ? <PartnerSection /> : null }
          <WorkFlow />
          {
            false ? (
              <>
                <TestimonialCard />
                <SecurePayment />
              </>
            ) : null
          }
          <Package />
          { false ? <Faq /> : null }
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = (context) => {
    return {
        props: {
          message: "Welcome to the About Page"
        },
    }
}
