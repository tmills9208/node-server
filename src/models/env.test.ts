require('dotenv').config();
const env = require('./env');

describe('models - environment / env.', () => {

  test('envServer - Has correct data.', () => {
    const envServer = env.envServer;
  
    expect(envServer).toBeDefined();
    expect(envServer.host).toMatch(/^(\d{1,3}\.){3}\d{1,3}$/);
    expect(envServer.port).toMatch(/^\d{1,5}$/);
  });
  
  test('envMySql - Has correct data.', () => {
    const envMySql= env.envMySql;
  
    expect(envMySql).toBeDefined();
    expect(envMySql.host).toMatch(/^(\d{1,3}\.){3}\d{1,3}$/);
    expect(envMySql.port).toMatch(/^\d{1,5}$/);
    expect(envMySql.user).toBeDefined();
    expect(envMySql.password).toBeDefined();
  });
});