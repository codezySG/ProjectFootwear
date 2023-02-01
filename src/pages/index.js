/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Project Footwear" />
          <Banner />
          <KeyFeature />
          <CoreFeature />
          <div sx={{'display': 'none'}}>
            <Feature />
            <PartnerSection />
          </div>
          <WorkFlow />
          <div sx={{'display': 'none'}}>
            <TestimonialCard />
            <SecurePayment />
          </div>
          <Package />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
