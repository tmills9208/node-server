/* 
  free .env template:

  HOST="127.0.0.1"
  PORT="8080"

  MYSQL_HOST="127.0.0.1"
  MYSQL_PORT="3306"
  MYSQL_USER="root"
  MYSQL_PASS="password"
  
*/

require('./env').config();

export type EnvServer = {
  host: string;
  port: string;
}

export type EnvMySql = {
  host: string;
  port: string;
  user: string;
  password: string;
}

const envServer: EnvServer = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || '8080',
};

const envMySql: EnvMySql = {
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: process.env.MYSQL_PORT || '3306',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || 'password'
};

module.exports = {
  envServer,
  envMySql,
};