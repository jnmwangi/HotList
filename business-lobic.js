/* 
    Data: Tasks which are categoriesed 
    Tasks: id, title, description, deadline, status, category
    Categories: id, name, banner
*/

console.log("Business logic")

const Task = function (title, description, deadline, status, categoryId, id = null) {
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

