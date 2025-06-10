import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon


export default function Home() {
 return (
<Layout title="John M Potter">
  <main
    style={{
      padding: '25px',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
{/* Header spans full width */}
<h1
  style={{
    fontWeight: 600,
    fontSize: '2rem',
    borderBottom: '2px solid #5ED1A5',
    paddingBottom: '16px',
    marginBottom: '1.5rem',
    color: '#1A202C',
    textAlign: 'center',
  }}
>
  SEO That Builds Itself
</h1>

{/* Flex layout for paragraph + image */}
<div
  style={{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
  }}
>
  {/* Left column: paragraph and button */}
  <div style={{ flex: '1 1 60%' }}>
    <p style={{ textAlign: 'left' }}>
      I'm a technical content writer with 7+ years of experience translating complex technical
      topics into clear, actionable content. I work closely with clients to create writing that
      supports business goals, drives organic growth, and improves user understanding.
      Additionally, I offer a semi-automated SEO pipeline as an
      add-on service to help clients extend the
      long-term value of their content.
    </p>
    <div style={{ textAlign: 'center' }}>
      <a
      href="mailto:johnpottergr@gmail.com"
      className="cta-button"
      style={{
        display: 'inline-block',
        width: '615px',
        align: 'center',
        textDecoration: 'none'
      }} >

      Lets Rank!
    </a>
   </div>
  </div>


  {/* Right column: image */}
  <div style={{ flex: '0 0 200px' }}>
    <img
      src="/img/me-4.jpeg"
      alt="John Potter"
      style={{
        width: '100%',
        maxWidth: '200px',
        height: 'auto',
        display: 'block',
      }}
    />
  </div>

</div>


         {/* SEO Skills */}

         <div>
         <h1 style={{ marginTop: '3.5rem', borderBottom: '2px solid #5ED1A5',
          paddingBottom: '16px', fontWeight: 600, fontSize: '2rem' }}>
           Here's How
         </h1>
         <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}>
           Content Strategy & Brief Generation
         </h2>
         <p style={{ marginBottom: '35px', textAlign: 'left' }}>
            I offer content planning services that combine
            predictive analysis with SERP-driven insights.
            My system pulls data from <a href="https://dataforseo.com/">DataForSeo</a> to
            tag search intent and highlight topics with strong
            ranking potential. It then auto-integrates that data with a
            custom Clearscope-style tool I built to
            analyze top-ranking pages and generate detailed
            content briefs. Each brief includes
            suggested headings, target questions,
            and <a href="https://searchengineland.com/nlp-seo-techniques-tools-strategies-437392">NLP-informed subtopics</a>, and is used to produce
            content that
            aligns with user intent and is structured to rank higher.
           </p>
               <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Technical Site Audits
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           For technical audits, I choose tools based on what’s needed. Google Search Console
           provides me with a high-level performance overview,
           while <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> offers
           automated crawls that uncover structural issues like broken links, duplicate content,
           redirect chains, and crawl depth. For visual reporting, I rely on <a href="https://sitebulb.com">Sitebulb's</a> automated
           crawl reports and intuitive maps to highlight technical issues in a more client-friendly format.
           </p>
            <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Link Building
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          Link building boosts your site’s authority and visibility
          by earning backlinks from trusted websites. It's an
          effective way to improve rankings and attract targeted
          traffic. But it’s a slow process. To speed things up,
          I've developed a <a href="https://johnpottergr.com/blog/6-5-2025-link-building-without-breaking-bank">semi-automated outreach system</a> that improves targeting,
          personalizes messaging, and shortens the time it takes to
          land quality links. I’m also
          using <a href="https://n8n.io/">n8n agents</a> to
          pull in recent social activity for more relevant outreach.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Diagnostic Analytics
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I began as an SEO consultant
           building <a href="https://johnpottergr.github.io/analyticsexample.pdf">Google Analytics reports</a> for enterprise
           clients, so I understand what decision-makers need. But GA4’s complexity often
           gets in the way. That’s why I built an automated reporting tool using Screaming
           Frog, GA4, and <a href="https://streamlit.io/">Streamlit</a>. It
           highlights engagement issues, flags underperforming content, and delivers clean,
           focused reports.
           </p>

           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
          What You Get Working With Me
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I bring a hybrid mindset to every project: part
           writer, part strategist, and part light technologist.
           Beyond
           writing well, I build repeatable systems that support
           high-performing content long after it’s published.
           Every piece I work on is built for visibility:
           grounded in search intent, informed by crawl data,
           and focused on closing meaningful content gaps.
           </p>



<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       </div>
     </main>
   </Layout>
 );
}
