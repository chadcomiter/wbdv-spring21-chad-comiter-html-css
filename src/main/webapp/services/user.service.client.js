function UserService() {

    this.findAllUsers = findAllUsers
    this.createUser = createUser
    this.deleteUser = deleteUser;
    var self = this;

    // POST - Create
    function createUser(user) {
        return fetch('http://localhost:8080/users', {
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
        return fetch('http://localhost:8080/users')
            .then(function(response){
                return response.json()
        })
    }

    //DELETE
    function deleteUser(id){
        return fetch('http://localhost:8080/users/${id}', {
            method: 'DELETE',
        })
        .then(response => response.json())
    }
}