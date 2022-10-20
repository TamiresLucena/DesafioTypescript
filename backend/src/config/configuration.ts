export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  database: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
  port: parseInt(process.env.PORT, 10) || 3000,
});
