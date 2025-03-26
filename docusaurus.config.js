// @ts-nocheck
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  staticDirectories: ['static'], // Moved here
  title: "John Potter's Portfolio",
  tagline: 'Technical Writing for Fintech, Blockchain, and More',
  favicon: 'img/favicon.ico',
  url: 'https://johnpottergr.github.io',
  baseUrl: '/',
  organizationName: 'johnpottergr',
  projectName: 'johns-portfolio',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'JP',
      items: [
        { to: '/', label: 'Welcome', position: 'left' },
        { to: '/portfolio', label: 'Portfolio', position: 'left' },
        { href: 'https://johnpottergr.github.io/resume3.pdf', label: 'Resume', position: 'left', external: true },
        { href: 'https://github.com/johnpottergr', label: 'GitHub', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            { label: 'Welcome', to: '/' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Resume', href: 'https://johnpottergr.github.io/resume3.pdf' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} John Potter. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;