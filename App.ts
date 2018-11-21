import { Express, Request, Response } from 'express'
import * as express from 'express'

import { BaseController, DefaultBaseController } from './controllers/app.controller'

class App {
  public express: Express
  private baseController = <any>DefaultBaseController

  constructor() {
    this.express = express()
    this.mountRoutes()

  }

  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', (req: Request, res: Response) => DefaultBaseController.main(req, res))
    this.express.use(router)
  }
}

export default new App().express
