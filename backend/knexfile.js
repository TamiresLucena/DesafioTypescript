import { configuration } from './src/config/configuration';

module.exports = {
  ...configuration().database,
  migrations: {
    directory: `${__dirname}/src/database/migrations`,
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`,
  },
};
