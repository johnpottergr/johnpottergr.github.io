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
  AI Search Visibility, Built In
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
      topics into actionable content. As search evolves, so has my
      focus: I now specialize in content that performs in both
      traditional SEO and AI-driven search experiences like ChatGPT,
      Claude, and Google’s AI Overviews. The reason is simple: The
      average LLM visitor is <a href="https://www.semrush.com/blog/ai-search-seo-traffic-study/">
      worth 4.4x</a> the average traditional organic
      search visitor.
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

      Lets Get Your Brand Quoted
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
           How I Work WIth Clients
         </h1>
         <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}>
           AI Visibility Strategy & Prompt-Led Planning
         </h2>
         <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          I develop content strategies designed to surface in AI
          conversations and prompts. <a href="https://clearscope-style.streamlit.app/">My system</a> pulls
          high-potential
          queries from tools like DataForSEO and Gemini, then combines
          them with prompt simulation outputs to identify where your
          brand or topic should be showing up, but isn’t yet. Each brief
          includes suggested phrasing that reflects how LLMs interpret
          topics, citation targets (e.g., Reddit, Quora, gov, edu),
          and <a href="https://searchengineland.com/nlp-seo-techniques-tools-strategies-437392">NLP-friendly structuring</a> for
          maximum quotability.
           </p>
               <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Content Audits for the AI Era
         </h2>
           <p style={{ marginBottom: '15px', textAlign: 'left' }}>
           Beyond title tags and crawl depth, my site audits include:
           </p>
            <p style={{ marginBottom: '35px', textAlign: 'left' }}>
           <ul>
            <li>
              <strong>LLM citation scans:</strong> to identify where your brand
              is being referenced in AI-generated answers across
              LLM tools, and how often it appears.
            </li>
            <li>
              <strong>Prompt recall tests:</strong> to evaluate how well your content
              shows up in response to common AI prompts, and whether that content is accurate.
            </li>
            <li>
               <strong>Linkless mention tracking:</strong> to spot brand
              mentions that appear in forums, summaries, and AI
              outputs even when there’s no backlink—critical for AI
              visibility.
            </li>
            <li>
               <strong>Crawlability for AI bots:</strong> to check if your content is accessible to AI-oriented crawlers and isn’t
               blocked by rendering issues or robots.txt settings.
            </li>
           </ul>
          I still use <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> and <a href="https://sitebulb.com">Sitebulb</a>, but
          I also pull in search-generated citations and prompt-level results using browser automations and n8n scripts.
           </p>
            <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           Linkless Authority Building
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          Link building still matters, but AI doesn’t always need a
          hyperlink to cite you. I help clients earn brand citations
          across forums, Q&A sites, and high-trust sources that appear in
          Google AI Overviews and ChatGPT responses. Using <a href="https://johnpottergr.com/blog/6-5-2025-link-building-without-breaking-bank">semi-automated</a> and
          real-time social signal filtering (<a href="https://n8n.io/">via n8n</a>), I help you show
          up where it counts, even when there's no blue link
          .
           </p>
           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
           LLM-Aware Content Performance
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          Traditional metrics like bounce rate miss what matters in an
          AI search world. I use custom dashboards built with Streamlit,
          GA4, and prompt-scraping agents to show:
          <ul>
            <li>
            Where your content appears in AI-generated summaries
            </li>
            <li>
            How prompts are trending vs. your topic map
            </li>
            <li>
            Whether your pages are being paraphrased, ignored, or misquoted by LLMs
            </li>
          </ul>
           </p>

           <h2 style={{textAlign: 'center', fontWeight: 400 }}>
          Why Work With Me
         </h2>
           <p style={{ marginBottom: '35px', textAlign: 'left' }}>
            I blend writing, strategy, and light automation to
            create content that resonates with humans and shows up
            in AI search. My system doesn’t stop at the page,
            it tracks where your content gets pulled, summarized, and
            shared by LLMs. Because the next click might not come from
            Google, it might come from Claude.
           </p>



<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       </div>
     </main>
   </Layout>
 );
}
