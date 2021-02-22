import express = require('express');
import { Response as Resp, ResData as RespData } from '@leismore/response';
import { error_handler_last } from '../src/index';

const app  = express();
const port = 8080;

app.get('/', (req:express.Request, res:express.Response, next:express.NextFunction) => {
  const resp = new Resp(res);
  let data:RespData = {statusCode: '200', headers: {'Content-Type': 'application/json'}, body: {'result': 'OK'}};
  resp.send(data);
});

app.use(error_handler_last);

app.listen(port, () => {
  console.log(`@leismore/error_handler_last testing server, listening at http://localhost:${port}`);
});
