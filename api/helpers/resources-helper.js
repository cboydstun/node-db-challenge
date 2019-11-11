const db = require('../../data/dbconf');

// DB exchange helper methods
const getResources= () =>{
    return db('resources')
    .select('*');
};

const getResourceById = (id) =>{
    return db('resources')
    .select('*')
    .where({id})
    .first();
};

const add = (resource) =>{
    return db('resources')
    .insert(resource, '*')
    .then(id =>getResourceById(...id));
};

module.exports = {
     getResources,
     getResourceById,
     add, 
};