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
  SEO That Understands Technical Content
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
          I offer content planning services that blend predictive analysis with SERP-driven
          insights. I use tools like <a href="https://marketmuse.com">MarketMuse</a> to identify topics with strong ranking potential
          and <a href="https://alsoasked.com">AlsoAsked</a> to uncover layered search intent. For SERP analysis, I’m building a
          Clearscope-style system that summarizes top-ranking pages using GPT and generates
          detailed content briefs. It also generates These content briefs with suggested headings,
          target questions, and NLP-informed topics to help guide content teams.
           </p>
               <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Technical Site Audits
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           For technical audits, I combine tools based on what’s required. Google Search Console
           provides me with high-level visibility into site performance,
           while <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> allows
           me to drill down into structural issues, such as broken links, duplicate content,
           redirect chains, and crawl depth. I’ll use <a href="https://sitebulb.com">Sitebulb</a>. if I need a more visual and
           explanatory report, as it provides me with intuitive audit scoring and crawl maps that
           make patterns easy to interpret. But its extensibility is more limited.
           </p>
            <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Link-Building
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          Link building helps increase your website’s visibility
          and authority by getting other reputable sites to link back to yours. It's a great way to
          improve search engine rankings and drive targeted traffic. But link-building is a slow process. Tools like
          Tools like Postaga and Respona accelerate this task but they're expensive. I've built my own, which
          consists of connecting <a href="https://hunter.io/">Hunter.io to</a> google sheets + <a href="https://www.gmass.co/">gmass</a>
          I can customize this outreach system to run campaigns targeted to market niches or
          specific content opportunities that align with your brand.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Diagnostic Analytics
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           As an SEO consultant, I started by
           building <a href="https://johnpottergr.github.io/analyticsexample.pdf">Google Analytics reports</a> for enterprise
           clients, so I understand what decision-makers need to see. But GA4’s complexity often
           gets in the way. That’s why I’ve built a custom reporting tool that combines Screaming
           Frog, GA4, and <a href="https://streamlit.io/">Streamlit</a> to deliver focused SEO insights. It lets me highlight technical
           issues and engagement metrics in a single view, uncover which content underperforms and
           why, and deliver easy-to-understand reports without the all the data clutter.
           </p>
            <h2 style={{textAlign: 'center', fontWeight: 400 }}>
          SEO Data Automation
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I build backend workflows that automate the repetitive parts of SEO, from nightly
           site crawls to syncing GA4 and content data into a central warehouse using Python and
           cloud tools. This reduces delays, eliminates manual cleanup, and surfaces technical
           issues before they affect rankings. These systems are designed to scale across large or
           multi-site portfolios, freeing up agency time for strategy and allowing teams to deliver
           more consistent, data-informed recommendations at speed.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
          Why My Workflow Matters
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          I’ve developed light engineering skills that let me move beyond off-the-shelf SEO tools.
          With Python libraries like pandas and <a href="https://pypi.org/project/beautifulsoup4/">BeautifulSoup</a>, I can clean keyword data, analyze
          crawl outputs, and scrape SERP insights to uncover SEO opportunities others might
          overlook. This makes it easier to automate routine audits, build custom datasets, and
          shape workflows around the problem at hand rather than forcing the problem to fit a tool.
           </p>



<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       </div>
     </main>
   </Layout>
 );
}
