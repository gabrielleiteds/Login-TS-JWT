import express from 'express';
import bodyParser from 'body-parser';

//routes
import routes from '../Routes/routes';

const api = express()

api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())
api.use(routes)

export default api; 
