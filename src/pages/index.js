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
      supports business goals, drives organic growth, and improves user understanding. While
      writing is my foundation, I’m also focused on building advanced skills in SEO strategy,
      CRO, and data-driven performance analysis.
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
           What I Offer
         </h1>
         <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}>
           Content Strategy & Brief Generation
         </h2>
         <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          I offer content planning services that combine predictive analysis with SERP-driven
          insights. I use tools like <a href="https://marketmuse.com">MarketMuse</a> to identify topics with strong ranking potential
          and <a href="https://alsoasked.com">AlsoAsked</a> to map layered search intent.
          I’ve also built a Clearscope-style tool that automatically summarizes
          top-ranking pages using GPT and generates detailed briefs with suggested
          headings, target questions, and relevant NLP-informed topics.
           </p>
               <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Technical Site Audits
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           For technical audits, I choose tools based on what’s needed. Google Search Console
           gives me a high-level view of site performance,
           while <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> helps
           uncover structural issues like broken links, duplicate content,
           redirect chains, and crawl depth. If visual reporting is preferred, I use <a href="https://sitebulb.com">Sitebulb</a> for
           its intuitive and crawl maps that make technical issues easier to interpret.
           </p>
            <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Link Building
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          Link building boosts your site’s authority and visibility by earning backlinks
          from trusted websites. , helping improve rankings and attract targeted traffic.
          But link-building is a slow process.
          So I’ve developed an outreach system that enriches leads in Google Sheets with data from <a href="https://hunter.io/">Hunter.io</a>,
          then uses <a href="https://www.gmass.co/">GMass</a> to
          run personalized campaigns targeting specific market segments. Next,
          I'm adding an n8n agentic AI that enriches leads with recent
          content or social posts.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Diagnostic Analytics
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I began as an SEO consultant
           building <a href="https://johnpottergr.github.io/analyticsexample.pdf">Google Analytics reports</a> for enterprise
           clients, so I understand what decision-makers need. But GA4’s complexity often
           gets in the way. That’s why I built a custom reporting tool using Screaming
           Frog, GA4, and <a href="https://streamlit.io/">Streamlit</a>. It
           highlights technical and engagement issues, flags underperforming content, and delivers clean,
           focused reports.
           </p>

           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
          Why My Workflow Matters
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          I've built light engineering skills that let me go beyond off-the-shelf SEO tools.
          With Python libraries like pandas and <a href="https://pypi.org/project/beautifulsoup4/">BeautifulSoup</a>,
          I clean keyword data, analyze crawl outputs, and pull SERP insights others might miss.
          On the backend, I’ve automated the repetitive parts of SEO, like nightly crawls and syncing GA4
          and content metrics into a central warehouse. This setup reduces delays and helps catch
          issues before they impact rankings.
           </p>



<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       </div>
     </main>
   </Layout>
 );
}
