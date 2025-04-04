import React from 'react';
import Layout from '@theme/Layout';
import { FaPlay } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout title="John Potter: Technical Writer">
      <main
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '40px',
        }}
      >
        {/* Left Column */}
        <div style={{ flex: '0 0 280px', maxWidth: '280px', width: '100%' }}>
          <div
            style={{
              backgroundColor: '#FFF5E1',
              padding: '20px',
              borderRadius: '8px 8px 0 0',
              textAlign: 'center',
              borderBottom: '1px solid #ddd',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ margin: '0' }}>John M. Potter</h2>
            <div style={{ marginTop: '10px', fontSize: '1rem' }}>
              Technical Writer & Enthusiast
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f2f2f2',
              padding: '20px',
              borderRadius: '0 0 8px 8px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h4 style={{ margin: '30px 0 10px', fontSize: '1.1rem' }}>Connect</h4>
            <p style={{ margin: '10px 0' }}>johnpottergr@gmail.com</p>
            <p style={{ margin: '10px 0' }}>616.745.2985</p>
            <p style={{ margin: '10px 0' }}>Grand Rapids, MI</p>

            <div style={{ marginTop: '40px' }}>
              <a
                href="https://youtu.be/7DYhiD3IuxE?si=JRLkSk2bOVUUbwPf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 16px',
                  border: '1px solid #222222',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  color: '#2E7D32',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#E8F5E9';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <FaPlay style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                The Best Recommendation You'll Ever See
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (all content) */}
        <div style={{ flex: '1 1 700px', minWidth: '300px' }}>
          {/* Intro Row: Welcome text + Headshot */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 60ch' }}>
              <h1>Welcome</h1>
              <p>
                I’m a technical writer with 7+ years of experience in fintech, blockchain, and more.
                I’ve published 300+ articles on AI, quantum computing, and cryptocurrency.
              </p>
              <p>
                I enjoy working with clients to create clear, engaging content—whether that’s articles,
                guides, or documentation—that resonates with users and supports business goals. While I've primarily written articles,
                I’ve also contributed to technical documentation and am eager to take on more of it.
              </p>
            </div>

            <img
              src="/img/me-4.jpeg"
              alt="John M. Potter"
              style={{
                width: '180px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            />
          </div>

          {/* Skills Section */}
          <h2
            style={{
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '6px',
              marginBottom: '20px',
              marginTop: '40px',
            }}
          >
            Documentation Skills
          </h2>
          <ul>
            <li>
              Rewrote and enhanced Gruntwork.io’s documentation in Markdown, delivering over
              <a href="https://github.com/johnpottergr/Technical-Article-Portfolio/blob/main/Gruntwork%20Revised%20Docs.pdf"> 100+ sections, guides, and tutorials</a> on DevOps foundations, IaC best practices, and pipelines — and collaborated with the client to improve clarity and usability for developers. Explore my work
              <a href="https://github.com/EdifyContent"> on Gruntwork Docs.</a>
            </li>
            <li>
              Authored the <a href="https://johnpottergr.com/django.pdf">Django App</a> and <a href="https://johnpottergr.com/NodeJS.pdf">NodeJS Deploy Guides</a> for an Edify client, providing clear deployment instructions for developers (drafts available, final versions modified by the client).
            </li>
            <li>
              Samples include <a href="https://johnpottergr.com/Release.pdf">QuickSwap Release Notes</a>, <a href="https://johnpottergr.com/Proposal.pdf">Program Proposal</a>, and <a href="https://johnpottergr.com/uxportfolio.pdf">UX Portfolio</a>. I also created a <a href="https://johnpottergr.com/Guide.pdf">SaucerSwap Beginner's Guide</a> for new DeFi users.
            </li>
          </ul>

          {/* Projects Section */}
          <h2
            style={{
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '6px',
              marginBottom: '20px',
              marginTop: '40px',
            }}
          >
            Current Projects
          </h2>
          <ul>
            <li>Developing API documentation samples for my GitHub repository.</li>
            <li><em>Fintech Pulse: Stocks to Watch</em> — A blog analyzing trending stocks (currently on hold).</li>
            <li>
              Weekly guest blogger for SaucerSwap Labs, writing about decentralized finance for a DEX on the Hedera Blockchain — and posting on
              <a href="https://johnpottergr.github.io/blog"> my blog</a> as part of this collaboration.
            </li>
            <li>
              Learning SharePoint, Swagger, and Postman — exploring resources like
              <a href="https://learn.microsoft.com/en-us/sharepoint/"> SharePoint Documentation</a>,
              <a href="https://swagger.io/docs/"> Swagger Docs</a>, and
              <a href="https://learning.postman.com/"> Postman Learning Center</a>.
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
