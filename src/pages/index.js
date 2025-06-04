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
           AI-based SEO
         </h2>
         <p style={{ marginBottom: '35px', textAlign: 'left' }}>

            I use tools like <a href="https://marketmuse.com/">MarketMuse</a> for predictive content planning, <a href="https://surferseo.com/ai/">Surfer AI</a> for SERP-informed
            optimization, and <a href="https://alsoasked.com/">AlsoAsked</a> for layered search intent mapping. These go beyond
            traditional platforms like Ahrefs and SEMrush, helping me build content that ranks and
            resonates. I believe you should always be looking for a competitive edge in online marketing. You can see how I evaluate these tools and others on my <a href="https://johnpottergr.com/blog">
            blog</a>.
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
              <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Collaborative capabilities
         </h2>
          <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I collaborate easily in developer environments using Git and Markdown. One example:
           I rewrote and enhanced over <a href="https://johnpottergr.github.io/Gruntwork-Docs.pdf">100 documentation pages</a> for <a href="https://gruntwork.io">Gruntwork.io</a>, improving clarity
           and structure across DevOps tutorials, IaC best practices, and data pipeline guides.
           You can <a href="https://github.com/EdifyContent">commit history</a> to explore my contributions in detail.
           </p>


<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       </div>
     </main>
   </Layout>
 );
}
