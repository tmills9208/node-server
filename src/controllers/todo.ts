import { MySqlDbController } from '../util/db';

export class Todo {

}

class TodoController {
  private db: MySqlDbController<Todo>;

  constructor(db: MySqlDbController<Todo>) {
    this.db = db;
  }

}

module.exports = {
  Todo,
  TodoController
};