import Link from 'next/Link'
import Head from 'next/Head'

export default ({ children, title = 'React Vancouver' }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{title}</title>

      {/* Bootstrap 4 */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossorigin="anonymous"
      />

      {/* Font Awesome Icons */}
      <script src="https://use.fontawesome.com/003c3f5408.js" />

      {/* Google Roboto Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
    <header />

    {children}

    <footer />
  </div>
)
