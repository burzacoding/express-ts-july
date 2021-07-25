import { Application } from "express";
import express from 'express'
import morgan from 'morgan'

import homeHandler from './routes/homeHandler'

export class App {
  private app: Application
  constructor(private port?: number | string) {
    this.app = express()
    this.settings()
    this.middleware()
    this.routes()
  }

  settings () {
    this.app.set('port', this.port || process.env.PORT || 3045)
  }

  middleware() {
    this.app.use(express.json())
    console.log('App now parses json');
    this.app.use(morgan('dev'))
  }

  async listen () {
    await this.app.listen(this.app.get('port'))
    console.log(`Server on port ${this.app.get('port')}`);
  }

  routes () {
    this.app.use('/', homeHandler)
  }
}
