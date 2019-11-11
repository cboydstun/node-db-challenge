const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const ProjectsRouter = require('./api/routers/projects-router');
const ResourcesRouter = require('./api/routers/resources-router');


const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

server.get('/', (req,res) =>{
    res.status(200).json({message: "Endpoints are live."});
});

server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);

const _port = process.env.PORT || 4000;

server.listen(_port, () => console.log(`Server is running on port ${_port}`));