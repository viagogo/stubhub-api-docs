/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      collapsible: true,
      items: [
        'overview/introduction',
        'overview/media-type',
        'overview/sandbox-environment',
        'overview/basic-types',
        'overview/pagination',
        'overview/sorting',
        'overview/localization',
        'overview/sparse-fieldsets',
        'overview/error-responses',
      ]
    },
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'doc',
        id: 'authentication/index'
      },
      items: [
        'authentication/basic-steps',
        'authentication/application-only-authentication-flow',
        'authentication/user-login-authentication-flow',
        'authentication/token-expiration',
        'authentication/scopes',
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'guides/index'
      },
      items: [
        'guides/creating-a-listing',
      ]
    },
  ],
};

module.exports = sidebars;
