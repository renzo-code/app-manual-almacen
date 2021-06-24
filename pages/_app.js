import '../styles/global.scss'
import App from 'next/app'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp