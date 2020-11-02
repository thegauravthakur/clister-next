import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Header from '../src/components/Header';
import FeaturesSection1 from '../src/components/FeatureSection1';
import FeaturesSection2 from '../src/components/FeatureSection2';
import FeaturesSection3 from '../src/components/FeatureSection3';
import EndSection from '../src/components/EndSection';
import Footer from '../src/components/Footer';
import Head from 'next/head';

const Home = ({isMobile}) => {

  return (
    <Paper style={{backgroundColor: 'black'}}>
      <Head>
        <title>CLister: HomePage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description"
              content={'CLister is a cross-platform tool that will make you make your life more organized. It is fully customisable and all the data is synced safely on cloud'}/>
        <meta charSet="utf-8"/>
        {/*  social media links*/}
        <meta property="og:title" content="C-LISTER: Clean Listing App" key={'ogtitle'}/>
        <meta property="og:url" content="https://clister.in" key={'ogurl'}/>
        <meta property="og:image"
              content="https://res.cloudinary.com/gauravthakur/image/upload/v1603618699/CLISTER__CLEAN_LISTING_APP_2_1_rndenf.png"
              key={'ogimage'}/>
        <meta property="og:type" content="website" key={'ogtype'}/>
        <meta property="og:description"
              content="C-Lister is a cross-platform tool that will make your life more organized. It is fully customisable and all the data is synced safely on cloud"
              key={'ogdescription'}/>
        <meta property="og:locale" content="en_GB" key={'oglocale'}/>


      </Head>
      <Header isMobile={isMobile}/>
      <FeaturesSection1/>
      <FeaturesSection2/>
      <FeaturesSection3/>
      <EndSection/>
      <Footer/>
    </Paper>
  );
};
Home.getInitialProps = ({req}) => {
  let userAgent;
  if (req) { // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent']; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }
  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ));

  return {isMobile};
};

export default Home;
