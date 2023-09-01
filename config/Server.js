
const server = function (app) {
     app.listen(process.env.PORT, function () {
          console.log('Express app running on port ' + (process.env.PORT))
     });
}

module.exports = server
const cors = require('cors');
const corsOptions ={
    origin:'https://node-backend12345.onrender.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));