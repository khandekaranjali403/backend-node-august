
const server = function (app) {
     app.listen(process.env.PORT, function () {
          console.log('Express app running on port ' + (process.env.PORT))
     });
}

export default server
import cors from 'cors';
const corsOptions ={
    origin:'https://node-backend12345.onrender.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));