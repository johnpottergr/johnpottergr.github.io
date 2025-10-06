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
  Bridging Writing, Marketing, and Web3
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
      topics into actionable content. But I’m also branching out, using my background in crypto
      to help founders fundraise for their startups. My daily newsletter <em>Founders OnChain Capital </em>
      focuses on providing practical, actionable advice. It covers on-chain capital strategies, automated DeFi tools for startups, and hybrid models blending crypto, VC, and traditional finance.
    </p>
     <p style={{ textAlign: 'left',  marginBottom: '35px' }}>
            In the meantime, I’m working with the team at <a href="https://beomniscient.com/" target="_blank" rel="noopener noreferrer">
Omniscient Digital</a> to improve their clients’
            content strategy and execution, helping them reach niche audiences
            more effectively. My focus is to create clear content that helps teams achieve their goals.

    </p>

    <p>My newsletter can be found on <a href="https://www.linkedin.com/newsletters/founders-onchain-capital-6976225311034138624/">on LinkedIn</a></p>


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
    margin: '44px 0',
  }}
>   </div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/7DYhiD3IuxE?si=F3y8zcWtsqVwiwPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  </div>
     </main>
   </Layout>
 );
}
