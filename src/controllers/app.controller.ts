import { Request, Response } from 'express'
import { DefaultBaseService } from '../Services/base.service'

export interface BaseController {
  main(req: Request, res: Response): any
}

export class DefaultBaseController {
  // TODO Add dependency injections

  static main(req: Request, res: Response): any {
    DefaultBaseService.main()
    res.json({ awd: 'awdawd' })
  }
}
