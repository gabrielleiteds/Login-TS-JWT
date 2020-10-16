import 'reflect-metadata'; 
import api from './Api/api';

api.listen(process.env.PORT || 8000)