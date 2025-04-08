import React from 'react';
import Layout from '@theme/Layout';

export default function Workflow() {
  return (
    <Layout title="Workflow">
      <div style={{ padding: '20px', maxWidth: '830px', margin: '0 auto', color: '#F5F5F5' }}>
        <h1 style={{ color: '#F5F5F5' }}>My Writing Process</h1>

        {/* Workflow Section */}
        <h2 style={{ color: '#F5F5F5', borderBottom: '2px solid #F5F5F5', paddingBottom: '5px' }}>
        A Flexible Approach to Creating Content That Works
        </h2>

        <p>
  A clear process helps me deliver content that engages readers and meets your goals—but I'm always ready to adjust based on what you need. Here’s how I typically work:
</p>

<ol style={{ paddingLeft: '1.25rem', lineHeight: '1.6' }}>
  <li>
    <strong>Start with the Goal in Mind:</strong> I clarify what the piece needs to achieve. If it’s tied to an SEO keyword, I review competing content to identify gaps. That way, we’re offering something useful—not just repeating what’s already out there.
  </li>
  <li>
    <strong>Sketch an Outline for Your Audience:</strong> I build a reader-focused outline with clear, friendly headers. The goal is to keep the structure intuitive and easy to navigate.
  </li>
  <li>
    <strong>Write with Clarity and Tone:</strong> I focus on clear, approachable language—cutting fluff and writing with purpose. The aim is to give your audience something helpful and easy to digest, not something that sounds like a lecture.
    <div style={{ marginTop: '0.5rem' }}><em>Quick note on AI:</em> I may use it to generate ideas or rough drafts, but the final piece is mine—rewritten, polished, and human-crafted.</div>  </li>
  <li>
    <strong>Make It Easy to Read:</strong> Bullets, spacing, and visuals help break up dense content and keep readers engaged. Every section moves the piece forward toward a clear takeaway.
  </li>
  <li>
    <strong>Polish and Perfect:</strong> I use tools like Grammarly and SEMrush to refine grammar, tone, and SEO. Once I have your feedback, I revise the draft into something sharp, focused, and ready to publish.
  </li>
</ol>

      </div>
    </Layout>
  );
}

