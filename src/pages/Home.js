import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="">

        {/*  Page sections */}
        <HeroHome />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;