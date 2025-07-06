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
  AI Search Visibility, Built-In
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
     <p style={{ textAlign: 'left',  marginBottom: '35px' }}>
            I blend writing, strategy, and light automation to
            create content that resonates with humans and shows up
            in AI search. My system doesn’t stop at the page,
            it tracks where your content gets pulled, summarized, and
            shared by LLMs. Because the next click might not come from
            Google, it might come from Claude.

    </p>

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

         {/* New Section */}
  <div>
    <div
  style={{
    borderBottom: '2px solid #5ED1A5',
    margin: '4px 0',
  }}
>   </div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  </div>
     </main>
   </Layout>
 );
}
