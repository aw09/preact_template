import { resolve } from 'path';

export default (config, env, helpers) => {
  if (env.production) {
    config.output.publicPath = '/financial_records/';
  }
};