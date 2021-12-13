const { resolve } = require('path');
const rollup = require('rollup');

const rollupTypescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { babel } = require('@rollup/plugin-babel');

const previewInputOptions = {
  input: resolve(__dirname, '../src/index.ts'), // conditionally required
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    babel({ babelHelpers: 'bundled' }),
    rollupTypescript(),
  ],
  external: [
    '@storybook/addons',
    '@storybook/csf',
    '@storybook/theming',
    'core-js',
    'react-dom',
    'react',
  ],
};

const previewOutputOptions = {
  dir: resolve(__dirname, '../bundle'),
  format: 'es', // required
};

// see below for details on the options

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(previewInputOptions);

  await bundle.generate(previewOutputOptions);

  // or write the bundle to disk
  await bundle.write(previewOutputOptions);

  // closes the bundle
  await bundle.close();
}

build();
