import { PrismicClient, api } from '../lib/api'
import Head from 'next/head'
import cn from 'classnames'
import Nav from '../components/nav'
import About from '../components/about'
import Projects from '../components/projects'

export default function Home({home}) {
  // TODO performance
  const data = home?.data
  const { resume, about, tech_stack, projects } = data || {}

  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        {/* End Google Analytics */}

        <title>Samantha Combs | Front End Developer</title>
        <meta name="description" content="Front end developer based in Philadelphia with additional experience in research, ux + design strategy, and project management." />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>

      <Nav resume={resume} />
      
      <main className={cn('container')}>
        <About description={about} tech={tech_stack}/>
        <Projects projects={projects} />
      </main>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const { masterRef } = await PrismicClient.getApi()
  const ref = previewData?.ref || masterRef.ref

  let home = await PrismicClient.getByID(api.HOME_ID, {
    ref,
  })

  return {
    props: {
      preview,
      home: home ?? null,
    },
    revalidate: 1,
  }
}
