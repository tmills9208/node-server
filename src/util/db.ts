import { EnvMySql } from '../models/env';
import Connection from "mysql2/typings/mysql/lib/Connection";

const mysql = require('mysql2');
const models = require('./src/models');

// Following a suggestion here, initially for unit testing purposes: 
// https://stackoverflow.com/questions/63596277/mock-mysql-connection-with-jest
// Which also shows a generic way of creating a database handler,
// for each of the controllers too
export interface iDbController<T> {
  // Initialization / utils
  CreateConnection(envMySql: EnvMySql): Promise<void>;
  CreateConnectionFromEnv(): Promise<void>;
  CloseConnection(connection: Connection): Promise<void>;
  // CRUD Ops
  GetOne(id: string): Promise<T>;
  GetAll(): Promise<T[]>;
  CreateOne(object: T): Promise<void>;
  UpdateOne(id: string, object: T): Promise<void>;
  DeleteOne(id: string): Promise<void>;
}

export class MySqlDbController<T> implements iDbController<T> {

  private dbConnection: Connection | undefined;

  public constructor() {
    this.CreateConnectionFromEnv();
  }

  public async CreateConnection(envMySql: EnvMySql): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const dbConnection = mysql.createConnection({
          host: envMySql.host,
          port: envMySql.port,
          user: envMySql.user,
          password: envMySql.password
        });
        this.dbConnection = dbConnection;
        resolve();
      }
      catch(_e) {
        reject((_e as Error).message);
      }
    });
  }

  public async CreateConnectionFromEnv(): Promise<void>{
    return new Promise((resolve, reject) => {
      try {
        const envMySql = models.envMySql;
        const dbConnection = mysql.createConnection({
          host: envMySql.host,
          port: envMySql.port,
          user: envMySql.user,
          password: envMySql.password
        });
        this.dbConnection = dbConnection;
        resolve();
      }
      catch(_e) {
        reject((_e as Error).message);
      }
    });
  }

  public async CloseConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.dbConnection) {
        this.dbConnection.end();
        resolve();
      } 
      else {
        const message = `Couldnt close dbConnection: No connection exists.`;
        // console.log(message);
        reject(message);
      }
    });
  }

  public async GetOne(): Promise<T> {
    
    throw new Error("Method not implemented.");
    
  }

  public async GetAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  public async CreateOne(object: T): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async UpdateOne(id: string, object: T): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async DeleteOne(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}

// failed at first, needed to replace package: mysql -> mysql2
// explanation: https://stackoverflow.com/a/56509065
// dbConnection.connect(function(err) {
//   if (err) throw err;
//   console.log("MySQL Connection successful!");
// });