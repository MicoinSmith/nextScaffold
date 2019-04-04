import App from 'next/app';
import Head from 'next/head';
import Cookies from 'js-cookie';

class MyApp extends App {
  state = {
    count: 0
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>nextScaffold</title>
          <meta charSet='utf-8' />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
