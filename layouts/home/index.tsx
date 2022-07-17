import React from 'react';
import Header from '$components/header/Header';
import { HomeWrapper, Wrapper } from '$layouts/home/HomeLayoutStyle';
import Footer from '$components/footer/Footer';
import SchoolTable from '$components/school_table';

const HomeLayout = () => {
  return (
    <Wrapper>
      <HomeWrapper>
        <Header />
        <SchoolTable />
        <Footer />
      </HomeWrapper>
    </Wrapper>
  );
};

export default HomeLayout;
