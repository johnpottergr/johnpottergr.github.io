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


         {/* Documentation Skills */}

         <div>
         <h1 style={{ marginTop: '3.5rem', borderBottom: '2px solid #5ED1A5',
          paddingBottom: '16px', fontWeight: 600, fontSize: '2rem' }}>
           What I Offer
         </h1>
         <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}>
           Content Optimization
         </h2>
         <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          I use tools like <a href="https://marketmuse.com">MarketMuse</a> for
          predictive content planning and <a href="https://alsoasked.com">AlsoAsked</a> for layered
          search intent mapping. While Surfer AI excels at SERP-informed optimization, its content
          generation doesn't match my standards. To address that, I’m building a Surfer AI-style
          tool that analyzes top-ranking search results, summarizes key themes using GPT, and
          produces content briefs with suggested headings, target questions, and relevant
          NLP-driven topics (similar to what Clearscope offers).
           </p>
               <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Technical Site Audits
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           For technical audits, I combine tools based on what’s required. Google Search Console
           provides me with high-level visibility into site performance,
           while <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a>
           allows me to drill down into structural issues, such as broken links, duplicate content,
           redirect chains, and crawl depth. I’ll use Sitebulb if I need a more visual and
           explanatory report, as it provides me with intuitive audit scoring and crawl maps that
           make patterns easy to interpret. But its extensibility is more
           limited.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Conversion Rate Optimization (CRO)
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I provide CRO suggestions that align with search intent to boost both conversions and
           SEO performance. Using AI vision models, I analyze pages visually and incorporate
           detailed funnel and audience context to surface clear improvements.
           I also developed <a href="https://crosignals.com">CRO Signals</a> (under revision), a custom tool that
           analyzes historical traffic to uncover patterns that
           drive higher conversion outcomes.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Predictive analytics
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           Google Analytics tells you what happened. I go further using tools like <a href="https://plausible.io/">Plausible</a>,
           BigQuery, ChatGPT, and custom ML models (e.g. regression models
           for CTA conversion likelihood and clustering models for audience segmentation) to forecast
           which content will rank, which users may bounce, and which CTAs are likely to convert. I’m also exploring tools
           like <a href="https://www.canirank.com/">CanIRank</a> and <a href="https://www.dashword.com/">Dashword</a> to supplement traditional analytics with AI-based performance
           modeling.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Cutting-edge marketing knowledge
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           Staying current with technical developments is not only my job, it’s what I genuinely
           enjoy. I’m especially interested in <a href="https://www.anthropic.com/news/model-context-protocol">Model Context Protocol</a>, a new AI protocol that’s
           poised to to make the eCommerce experience more personalized and context-aware. I also
           study emerging strategies for ranking higher in ChatGPT and keep tabs on how
           AI-driven <a href="https://agenticbrand.ai/p/old-vs-new-finding-influencers-with-traditional-search-vs-semantic-ai-vibe-match">influencer campaigns</a> might reshape search marketing.
           </p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       </div>
     </main>
   </Layout>
 );
}
