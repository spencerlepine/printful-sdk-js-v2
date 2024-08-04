module.exports = {
  title: 'My Project Documentation', // Replace with your project title
  tagline: 'Your tagline here',
  url: 'https://your-docusaurus-site.com', // Replace with your website URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'my-docusaurus-project', // Usually your repo name.

  presets: [
    // [
    //   '@docusaurus/preset-classic',
    //   {
    //     docs: false,
    //     // theme: {
    //     //   customCss: require.resolve('./src/css/custom.css'),
    //     // },
    //   },
    // ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        path: './docs',
        routeBasePath: '/', // Set the base path for your documentation
      },
    ],
  ],
};
