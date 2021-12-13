const { resolve } = require('path');
const rollup = require('rollup');

const rollupTypescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
// const flatDts = require('rollup-plugin-flat-dts');

// const { default: dts } = require('rollup-plugin-dts');

const previewInputOptions = {
  input: resolve(__dirname, '../src/index.ts'), // conditionally required
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    rollupTypescript() /* , dts() */,
  ],
  external: [
    '@storybook/addons',
    '@storybook/components',
    '@storybook/csf',
    '@storybook/theming',
    'react-dom',
    'react',
    'core-js',
  ],
};

const previewOutputOptions = {
  dir: resolve(__dirname, '../bundle/preview'),

  format: 'es', // required
  // plugins: [flatDts()],
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
