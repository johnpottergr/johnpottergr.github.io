import React from 'react';
import Layout from '@theme/Layout';

export default function Cutting() {
 return (
<Layout title="Cutting Edge">
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
  Cutting Edge Add-Ons
</h1>
        <div
         style={{
         display: 'flex',
         alignItems: 'flex-start',
         justifyContent: 'space-between',
         flexWrap: 'wrap',
         gap: '0px',
         }}
         >
         {/* SEO Skills */}
         <div style={{ flex: '1 1 60%' }}>
         <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}>
           Conversion Rate Optimization (CRO)
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I provide CRO suggestions that align with search intent to boost both conversions and
           SEO performance. Using <a href="https://johnpottergr.com/blog/6-6-2025-ai-vision-models">AI vision models</a>,
           I analyze pages visually and incorporate
           detailed funnel and audience context to promote clear improvements.
           To fortify these insights, I developed <a href="https://crosignals.com">CRO Signals</a>,
           a custom tool that analyzes historical traffic to uncover patterns that
           drive higher conversion outcomes.
           </p>
           </div>
              {/* Right column: image */}
           <div style={{ flex: '0 0 200px' }}>
           <img
           src="/img/signals2.png"
           alt="John Potter"
           style={{
           width: '100%',
           maxWidth: '200px',
           height: 'auto',
           marginTop: '80px',
           display: 'block',
          }}
          />
         </div>
               <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Predictive Analytics
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           Google Analytics tells you what happened. I go further using tools like <a href="https://plausible.io/">Plausible</a>,
           BigQuery, ChatGPT, and custom ML models (e.g. regression models
           for CTA conversion likelihood and clustering models for audience segmentation) to forecast
           which content will rank, which users may bounce, and which CTAs are likely to convert. I’m also exploring tools
           like <a href="https://www.canirank.com/">CanIRank</a> to supplement traditional analytics with AI-based performance
           modeling.
           </p>

            <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Semantic Search
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           Brands should look for influencer partners who align
           with their values, not just their keywords. Using AI-powered semantic
           search, I match your brand’s tone, values, and
           audience with creators whose content resonates on a
           deeper level.
           My approach relies on vector embeddings and GPT-based
           tools to identify overlooked opportunities,
           especially among micro-influencers. These models
           uncover alignment based on sentiment and shared intent.
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Answer Engine Optimization (AEO)
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           I help brands get discovered in LLMs by focusing on
           what actually drives rankings: credible third-party
           reviews and real-time product data. While updating
           product pages is baseline hygiene, tools like ChatGPT
           prioritize what others say about your products. I
           support influencer-driven review campaigns and
           explore MCP servers to feed fresh product info
           directly to LLM systems.
           </p>
       </div>
     </main>
   </Layout>
 );
}
