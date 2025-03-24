import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon

export default function Home() {
  return (
    <Layout title="John Potter's Portfolio">
      <main style={{ padding: '20px', display: 'flex', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Left Column */}
        <div style={{ flex: '0 0 30%', textAlign: 'center', padding: '0', borderRadius: '8px', color: '#222222' }}>
          {/* Top Half with No Background */}
          <div
            style={{
              backgroundColor: '#FFF5E1', // Light cream background
              padding: '20px',
              borderRadius: '8px 8px 0 0',
              borderBottom: '1px solid #ddd',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '150px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h2 style={{ margin: '0' }}>John M. Potter</h2>
            <div style={{ lineHeight: '1.2', marginTop: '10px' }}>
              <span>Technical Writer & Enthusiast</span>
            </div>
          </div>

          {/* Bottom Half with Original White Background */}
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '0 0 8px 8px' }}>
            {/* Connect Section */}
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ margin: '0 0 10px', fontSize: '1.1rem' }}>Connect</h4>
              <h5 style={{ margin: '20px 0 5px' }}>
                <a href="mailto:johnpottergr@gmail.com" style={{ color: '#222222', textDecoration: 'none' }}>johnpottergr@gmail.com</a>
              </h5>
              <h5 style={{ margin: '20px 0 5px' }}>
                <a href="tel:+16167452985" style={{ color: '#222222', textDecoration: 'none' }}>616.745.2985</a>
              </h5>
              <h5 style={{ margin: '20px 0 5px' }}>Grand Rapids, MI</h5>
            </div>
            {/* Recommendation Video Link */}
            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
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
                The Best Recommendation You'll Ever See
              </a>
            </div>
          </div>
        </div>


       {/* Right Column */}
       <div style={{ flex: '1', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flex: '1' }}>
              <p style={{ margin: '0 0 10px 0' }}>
              Welcome to my portfolio! I’m a technical writer with 7+ years of experience in fintech,
              blockchain, and more. I’ve published 200+ articles on AI, quantum computing, and cryptocurrency.              </p>
              <p style={{ margin: '0' }}>One project I’m proud of was turning a complex machine learning study into a series of blog posts that made the topic approachable. I enjoy working with clients to create clear, engaging content—whether that’s articles, guides, or documentation—that resonates with users and supports business goals. While most of my work has focused on articles,
                I’ve also contributed to technical documentation and am eager to take on more of it.

             </p>
            </div>
            <img
              src="/img/me-2.jpeg"
              alt="John Potter"
              style={{ width: '100%', maxWidth: '200px', display: 'block', paddingLeft: '20px'
              }}
            />
          </div>
          <p></p>

          <p>
            <Link to="/docs/intro">Explore my full portfolio</Link>
          </p>

          {/* Documentation Skills */}
          <h3>Documentation Skills</h3>
          <ul>
            <li>
              Markdown: <a href="https://github.com/EdifyContent">Explore my GitHub contributions at Edify</a>. Over 35+ documentation commits
            </li>
            <li>
              Software: Authored the <a href="/django.pdf">Django App</a> and <a href="/NodeJS.pdf">NodeJS Deploy Guide</a> for an Edify client
            </li>
            <li>API: Currently working on API documentation</li>
            <li>
              Samples: <a href="/Release.pdf">QuickSwap Release Notes</a>, <a href="/Proposal.pdf">Program Proposal</a>,{' '}
              <a href="/Guide.pdf">SaucerSwap Beginner's Guide</a>
            </li>
          </ul>

          {/* Current Projects */}
          <h3>Current Projects</h3>
          <ul>
            <li>
              <a href="https://johnpottergr.substack.com/">Fintech Pulse: Stocks to Watch</a>: A blog where I analyze trending stocks (currently on hold)
            </li>
            <li>
              <a href="https://medium.com/@SaucerSwap">Weekly guest blogger for SaucerSwap Labs</a>: I write about decentralized finance for a DEX on the Hedera Blockchain
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/office/sharepoint-video-training-cb8ef501-84db-4427-ac77-ec2009fb8e23">Learning SharePoint</a>,{' '}
              <a href="https://www.tableau.com/learn/training">Tableau</a>, and{' '}
              <a href="https://learn.microsoft.com/en-us/training/browse/?products=power-bi">PowerBI</a>: Great resources!
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}