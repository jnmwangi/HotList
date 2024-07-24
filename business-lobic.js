/* 
    Data: Tasks which are categoriesed 
    Tasks: id, title, description, deadline, status, category
    Categories: id, name, banner
*/

const Task = function (title, description, deadline, categoryId, status="pending", id = null) {
    return {
        id,
        title,
        description,
        deadline,
        status,
        categoryId
    }
}

const Category = function(name, banner, id=null){
    return {
        id,
        name,
        banner
    }
}

/**
 * CRUD 
 * Create -------------- POST
 * Read  --------------- GET
 * Update -------------- PATCH
 * Delete -------------- DELETE
 * Update Or Create ---- PUT
 * 
 * Asyncronous
 * Syncronous
 * Proceses
 *  */ 


const BASEURL = "http://localhost:4000";

function handleResponse(response){
    if( response.status < 200 || response.status > 299 ){
        throw new Error("Request failed. Try again");
    }
    return response.json();
}

function create(endpoint, data){
    return fetch(`${BASEURL}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }).then( handleResponse );
}

function readAll(endpoint){
    return fetch(`${BASEURL}${endpoint}`, {
        headers:{
            "Content-Type": "application/json"
        }
    }).then( handleResponse );
}

function readOne(endpoint){

    return fetch(`${BASEURL}${endpoint}`, {
        headers:{
            "Content-Type": "application/json"
        }
    }).then( handleResponse );
}

function update(endpoint, id, data){
    return fetch(`${BASEURL}${endpoint}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }).then( handleResponse );
}

function _delete(endpoint, id){
    return fetch(`${BASEURL}${endpoint}/${id}`, {
        method:"DELETE"
    })
}

