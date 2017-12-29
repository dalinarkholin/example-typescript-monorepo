require('module-alias').addAlias("~", __dirname + "/../../")

import * as express from "express";
import * as bodyParser from "body-parser";
import init from "~/infrastructure/db/connection";

// import core from "~/core";

import controllers from "./controllers";

init();

// var jwtCheck = jwt({
//   secret: new Buffer('zjUDEWLzIXTO9bbfdPfwdlv4yahjhoQSm0TeAI54B5fG4TDaym3zJB9PFkNjN6IT', 'base64'),
//   audience: '19WFCbx3oXRGsBWMRTnDSpWQItq3t43U'
// });

const app = express();
const port = process.env.PORT || 9229;

app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));

app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next(); 
});

// Unprotected Routes
app.get('/', (req: any, res: any) => {
  res.json('Autio API');
});
// app.post('/api/users', createUser);

// protect all api routes
// app.use('/api', jwtCheck);

app.use('/api', controllers);

app.listen(port);

export default app;