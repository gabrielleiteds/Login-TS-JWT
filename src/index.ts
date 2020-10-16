import 'reflect-metadata'; 
import api from './api/api';

api.listen(process.env.PORT || 8000)