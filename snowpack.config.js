module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
    polyfillNode: false,
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')({ crypto: true })],
    },
  },
  devOptions: {
    /* ... */
    port: 4000,
    // open: 'none',
  },
  buildOptions: {
    /* ... */
    out: 'dist',
    sourceMaps: true,
    clean: true,
    baseUrl: '/',
    // metaDir: 'static',
    // webModulesUrl: 'web',
  },
  proxy: {
    /* ... */
    '/api': 'https://pokeapi.co/api/v2',
  },
  alias: {
    /* ... */
    // // Type 1: Package Import Alias
    lodash: 'lodash-es',
    // react: 'preact/compat',
    // // Type 2: Local Directory Import Alias (relative to cwd)
    // components: './src/components',
    // '@app': './src',
  },
};
