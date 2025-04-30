import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon


export default function Home() {
 return (
   <Layout title="John Potter">
     <main style={{ padding: '20px', display: 'flex', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
       {/* Left Column */}
       <div style={{ flex: '0 0 30%', textAlign: 'center', padding: '0', borderRadius: '8px', color: '#222222' }}>
         {/* Top Half with No Background */}


         <div
           style={{
             backgroundColor: '#111111', // Light cream background
             padding: '15px',
             borderRadius: '12px 12px 0 0',
             border: '1px solid #222',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center',
             minHeight: '140px',
             boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)'
           }}
         >
<h2 style={{ margin: '0', color: '#ffffff' }}>John M. Potter</h2>
  <div style={{ lineHeight: '1.2', marginTop: '0px', color: '#000' }}>

           </div>
         </div>


         {/* Bottom Half with Original White Background */}
         <div style={{ backgroundColor: '#f9f7f2', border: '1px solid #9A9C99',padding: '20px', borderRadius: '0 0 8px 8px' }}>
           {/* Connect Section */}
           <div style={{ marginTop: '0px', fontSize: '0.95rem',
lineHeight: '1.5',
opacity: 0.9


           }}>
<p>"John is one of the few writers that I've met online
  who is dedicated and smart. He accepts feedback
  really well, internalizes it, and acts on it.
  He's dependable and embodies a lot of great characteristics that are
  hard to find in technical writers."</p>
  <p>-Anthony Garone, Edify Content</p>
           </div>
           {/* Recommendation Video Link */}
           <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
             <a
               href="https://youtu.be/7DYhiD3IuxE?si=JRLkSk2bOVUUbwPf"
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 padding: '10px',
                 border: '1px solid #222222',
                 borderRadius: '8px',
                 backgroundColor: '#ffffff',
                 color: '#2E7D32',
                 textDecoration: 'none',
                 fontSize: '1rem',
                 fontWeight: '500',
                 transition: 'background-color 0.3s, color 0.3s, transform 0.2s',
                 maxWidth: '80%',
                 textAlign: 'center'
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#E8F5E9';
                 e.target.style.color = '#2E7D32';
                 e.target.style.transform = 'scale(1.02)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = '#ffffff';
                 e.target.style.color = '#2E7D32';
                 e.target.style.transform = 'scale(1)';
               }}
             >
               <FaPlay style={{ marginRight: '8px', fontSize: '0.9rem' }} />
               The Best Recommendation You'll Ever Hear
             </a>
           </div>
                   {/* Connect Section */}
                   <div style={{ marginTop: '50px' }}>
             <h5 style={{ margin: '10px 0 5px' }}>
               <a href="mailto:johnpottergr@gmail.com" style={{ color: '#222222', textDecoration: 'none' }}>johnpottergr@gmail.com</a>
             </h5>
             <h5 style={{ margin: '10px 0 5px' }}>
               <a href="tel:+16167452985" style={{ color: '#222222', textDecoration: 'none' }}>616.745.2985</a>
             </h5>
             <h5 style={{ margin: '10px 0 5px' }}>Grand Rapids, MI</h5>
           </div>
         </div>
       </div>




      {/* Right Column */}
      <div style={{ flex: '1', textAlign: 'left' }}>
         <div style={{ display: 'flex', alignItems: 'flex-start' }}>
           <div style={{ flex: '1' }}>
           <h1 style={{
    fontWeight: 600,  // or 400 for regular
    fontSize: '2rem', // optional: slightly reduce size too
  borderBottom: '2px solid #5ED1A5',
  paddingBottom: '6px',
  marginBottom: '1rem',
  color: '#1A202C', fontStyle: 'italic'
}}>Welcome</h1>
              <p>
              I’m a technical content writer with 7+ years of experience
              creating clear, engaging material across AI, blockchain,
              and other complex topics. I work closely with clients to
              create content that supports their business goals. While most of my work has been article-based,
              I’m eager to take on more documentation projects as well.
            </p>
            <a
  href="mailto:johnpottergr@gmail.com"
  style={{
    display: 'inline-block',
    marginTop: '-0.25rem',
    marginBottom: '1.25rem',
    padding: '10px 20px',
    backgroundColor: '#5ED1A5',
    color: '#1A202C',
    fontWeight: 'bold',
    borderRadius: '6px',
    textDecoration: 'none',
  }}
>
  Hire Me
</a>
           </div>
           <img
             src="/img/me-4.jpeg"
             alt="John Potter"
             style={{ width: '100%', maxWidth: '200px', display: 'block', paddingLeft: '20px'
             }}
           />
         </div>



         {/* Documentation Skills */}
         <h2 style={{ marginTop: '0.5rem', borderBottom: '1px solid #5ED1A5', paddingBottom: '6px' }}>
           Documentation Skills
         </h2>
         <ul>
         <li style={{ marginBottom: '10px' }}>
             Rewrote and enhanced Gruntwork.io’s documentation in Markdown, delivering
             over <a href="https://johnpottergr.github.io/Gruntwork-Docs.pdf" target="_blank" rel="noopener noreferrer" style={{
    color: '#2E7D32', fontWeight: '500',
  }}
>
               100+ sections, guides, and tutorials </a>
             on DevOps foundations, IaC best practices, and pipelines.
             Worked closely with the client via GitHub to improve clarity and structure.
             View <a href="https://github.com/EdifyContent" style={{
             color: '#2E7D32', fontWeight: '500',
            }}>commit history</a> to see contribution details.
           </li>
           <li style={{ marginBottom: '10px' }}>
           Wrote articles on <a href="https://revelate.co/blog/how-to-build-data-products-that-work/" style={{
    color: '#2E7D32', fontWeight: '500',
  }}
           >data productization</a>, <a href="https://www.datafold.com/blog/data-quality-checks" style={{
            color: '#2E7D32', fontWeight: '500',
          }}
                   >data transformation</a>, and <a href="https://johnpottergr.com/article%20by%20industry.pdf" style={{
                    color: '#2E7D32', fontWeight: '500',
                  }}
                           >other data engineering topics</a>, along with step-by-step <a href="https://johnpottergr.com/Data%20Migration%20Guides.pdf" style={{
    color: '#2E7D32', fontWeight: '500',
  }}
           >data migration guides</a>.
           Also contributed technical writing for Edify Content, including <a href="https://johnpottergr.github.io/django.pdf" style={{
    color: '#2E7D32', fontWeight: '500',
  }}
           >Django App</a> and{" "}
             <a href="https://johnpottergr.github.io/nodejs.pdf" style={{
    color: '#2E7D32', fontWeight: '500',
  }}
           >NodeJS</a> deployment guides.
           </li>
           <li>Built <a href="https://docs.stablecraft.io" style={{
            color: '#2E7D32', fontWeight: '500',
          }}
                   >comprehensive API docs</a> for a public payment platform using Mintlify and OpenAPI, with support for interactive testing and versioning.
           </li>
         </ul>

         {/* Current Projects */}
         <h2 style={{ marginTop: '1.5rem', borderBottom: '1px solid #94e2c2', paddingBottom: '6px' }}>
           Current Projects
         </h2>
         <ul>
         <li style={{ marginBottom: '10px' }}>
            Building <a href="https://stablecraft.io" style={{
    color: '#5ED1A5', fontWeight: '500',
  }}>Stablecraft.io</a>, a dedicated platform featuring a stablecoin knowledge base, focused blog, real-time
            liquidity tracker, peg stress testing tools, and risk manager.
           </li>
           <li style={{ marginBottom: '10px' }}>
             Initiating Doclify, a service to deliver AI-driven documentation solutions using Mintlify’s Model Context Protocol (MCP) for businesses.
            </li>

         </ul>
          {/* About this site */}
          <h2 style={{ marginTop: '1.5rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '6px' }}>
           About This Site
         </h2>
         <ul>
         <li style={{ marginBottom: '10px' }}>
         I created this portfolio using Docusaurus, a
         static site generator, to present my technical
         writing and documentation projects in a clean,
         user-friendly format.
           </li>
           </ul>
       </div>
     </main>
   </Layout>
 );
}
