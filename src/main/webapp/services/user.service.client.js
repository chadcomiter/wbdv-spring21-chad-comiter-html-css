function UserService() {

    this.findAllUsers = findAllUsers
    this.createUser = createUser
    this.deleteUser = deleteUser;
    this.findUserById = findUserById;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/00175462801/users';
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
        //not in rubric
    }
    //Update
    function updateUser(userId, user){
        return fetch(`${self.url}/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }
    //DELETE
    function deleteUser(currId){
        return fetch(`${self.url}/${currId}`, {
            method: 'DELETE'
        }).then(function (response){
            return response.json()
        })
    }
}