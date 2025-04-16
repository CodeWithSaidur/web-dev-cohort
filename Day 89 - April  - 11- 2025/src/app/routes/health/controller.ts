import type { Request, Response } from 'express';

class HealthController {
  public handlerHealthCheck(req: Request, res: Response) {
    return res.json({
      status: 'health',
    });
  }
}

export default HealthController;
