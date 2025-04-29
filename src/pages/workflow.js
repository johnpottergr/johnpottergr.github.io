import React from 'react';
import Layout from '@theme/Layout';

export default function Workflow() {
  return (
    <Layout title="Workflow">
      <div style={{ padding: '20px', maxWidth: '830px', margin: '0 auto', color: '#222' }}>
        <h1 style={{ color: '#222' }}>My Writing Process</h1>

        {/* Workflow Section */}
        <h2 style={{ color: '#222',
  fontWeight: 400,
borderBottom: '2px solid #5ED1A5', paddingTop: '10px', paddingBottom: '5px' }}>
        Clear and audience-focused        </h2>

        <p>
  A clear process helps me deliver content that engages readers and meets your goals—but I'm always ready to adjust based on what you need. Here’s how I typically work:
</p>

<ol style={{ paddingLeft: '1.25rem', marginTop: '1.5rem', lineHeight: '1.7' }}>
<li style={{ marginBottom: '1.5rem' }}>
    <strong style={{ color: '#008000' }}>Start with the goal in mind:</strong> I clarify what the piece needs to achieve. If it’s tied to an SEO keyword, I review competing content to identify gaps. That way, we’re offering something useful—not just repeating what’s already out there.
  </li>
  <li style={{ marginBottom: '1.5rem' }}>
    <strong style={{ color: '#008000' }}>Sketch a structure that flows:</strong> Before writing, I organize the piece around a logical path—breaking it into clear sections that guide the reader step by step. Each header serves a purpose, making the content easy to follow from start to finish.
  </li>
  <li style={{ marginBottom: '1.5rem' }}>
  <strong style={{ color: '#008000' }}>Write with clarity and tone:</strong> I focus on clear, approachable language—cutting fluff and writing with purpose. The aim is to give your audience something helpful and easy to digest, not something that sounds like a lecture.
  <div style={{
  background: '#d3d3d3',
  padding: '1rem',
  borderLeft: '0px solid #5ED1A5',
  margin: '1.5rem 0',
  color: '#222',
  borderRadius: '6px',
}}>
        <em>Quick note on AI:</em> I may use it to generate ideas or rough drafts, but the final piece is mine—rewritten, polished, and human-crafted.</div>  </li>
    <li style={{ marginBottom: '1.5rem' }}>
    <strong style={{ color: '#008000' }}>Make It easy to read:</strong> Bullets, spacing, and visuals help break up dense content and keep readers engaged. Every section moves the piece forward toward a clear takeaway.
  </li>
  <li style={{ marginBottom: '1.5rem' }}>
  <strong style={{ color: '#008000' }}>Polish and perfect:</strong> I use tools like Grammarly and SEMrush to refine grammar, tone, and SEO. Once I have your feedback, I revise the draft into something sharp, focused, and ready to publish.
  </li>
</ol>

      </div>
    </Layout>
  );
}

