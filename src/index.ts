import 'reflect-metadata';
require('dotenv').config();
import api from './api/api';

api.listen(process.env.PORT || 8000)