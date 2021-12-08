const { resolve } = require('path');
const rollup = require('rollup');

const rollupTypescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');

const inputOptions = {
  // core input options
  // external,
  input: resolve(__dirname, '../src/index.ts'), // conditionally required
  plugins: [nodeResolve(), commonjs(), json(), rollupTypescript()],
};

const outputOptions = {
  // core output options
  dir: resolve(__dirname, '../bundle'),
  format: 'es', // required
  // globals,
  // name,
  // plugins,
  // // advanced output options
  // assetFileNames,
  // banner,
  // chunkFileNames,
  // compact,
  // entryFileNames,
  // extend,
  // externalLiveBindings,
  // footer,
  // hoistTransitiveImports,
  // inlineDynamicImports,
  // interop,
  // intro,
  // manualChunks,
  // minifyInternalExports,
  // outro,
  // paths,
  // preserveModules,
  // preserveModulesRoot,
  // sourcemap,
  // sourcemapExcludeSources,
  // sourcemapFile,
  // sourcemapPathTransform,
  // validate,
  // // danger zone
  // amd,
  // esModule,
  // exports,
  // freeze,
  // indent,
  // namespaceToStringTag,
  // noConflict,
  // preferConst,
  // sanitizeFileName,
  // strict,
  // systemNullSetters,
};

// see below for details on the options

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);

  // closes the bundle
  await bundle.close();
}

build();
