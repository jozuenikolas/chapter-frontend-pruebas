import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import React from 'react'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.pichincha.com/v1.0.0smw/wc-design-pichincha/wc-design-pichincha.css"
            integrity="sha384-bZtZYEIKUWxiub2baO2HJwvw1CvZbpuBtM0zot91GrZz4oEy/Q2soyYG8R6Lap0j"
            crossOrigin="anonymous"
          />

          <script
            src="https://cdn.pichincha.com/v1.0.0smw/wc-design-pichincha/wc-design-pichincha.esm.js"
            integrity="sha384-68bFwb14QCynLzBTVpaSTBpjFTvo2FDC2+hc7H8wwpITPARENnRY95SEjcjbzK2S"
            crossOrigin="anonymous"
            type="module"
            defer
          />
        </Head>
        <body>
        <NextScript/>
        <Main/>
        <div id="modal_root"/>
        </body>
      </Html>
    )
  }
}
