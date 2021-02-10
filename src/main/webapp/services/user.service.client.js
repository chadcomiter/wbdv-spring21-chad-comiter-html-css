function UserService() {

    this.findAllUsers = findAllUsers
    this.createUser = createUser
    this.deleteUser = deleteUser;
    this.findUserById = findUserById;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001754628/users';
    var self = this;

    // POST - Create
    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json()
        })
    }
    
    // GET - Read
    function findAllUsers() {
        return fetch(self.url)
            .then(function(response){
                return response.json()
        })
    }

    function findUserById(){

    }
    //Update
    function updateUser(){

    }
    //DELETE
    function deleteUser(id){
    
        //$button.attr(id) retrieves id
        //now we can call the fetch
        return fetch(`${self.url}/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
    }
}