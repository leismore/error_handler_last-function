/**
 * error_handler_last function - An error handler function for Express.js
 */

import {Request, Response, NextFunction} from 'express';
import {LMResponse as Resp} from '@leismore/response';

function error_handler_last(error:Error, req:Request, res:Response, next:NextFunction): void
{
  const resp = new Resp(res);

  if (res.headersSent) {
    next(error);
    return;
  }

  resp.sendERROR(error);
}

export {error_handler_last};
