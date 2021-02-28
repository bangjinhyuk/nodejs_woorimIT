"use strict"

class UserStorage{
    static #users = {
        id: ["bang","bbangi"],
        psword: ["0103","1234"], 
        name:["방진혁","빵진혁"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}
module.exports = UserStorage;