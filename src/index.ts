/**
 * error_handler_Error
 * An error handler function for the standard JavaScript Error.
 */

'use strict';

const Response    = require('@leismore/response');

function error_handler_Error(error, req, res, next)
{
  const resp = new Response(res);

  // If HTTP headers sent, go to default handler
  if (res.headersSent) {
    next(error);
    return;
  }
  // End

  resp.res500(error);
  return;
}

module.exports = error_handler_Error;
