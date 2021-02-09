(function () {
    var userService = new UserService();
    var rowTemplate;
    var tbody;
    var createUserBtn;

    jQuery(main);
    
    function main() {
        rowTemplate = jQuery('.wbdv-template');
        createUserBtn = jQuery('.wbdv-create');
        tbody = jQuery('tbody');

        createUserBtn.click(createUser);
        
        userService.findAllUsers().then(renderUsers)
    }
    
    function createUser() {
        var usernameFld = $('#usernameFld');
        var passwordFld = $('#passwordFld');
        var firstNameFld = $('#firstNameFld');
        var lastNameFld = $('#lastNameFld');
        var roleFld = $('#roleFld');

        var username = usernameFld.val();
        var password = passwordFld.val();
        var firstname = firstNameFld.val();
        var lastname = lastNameFld.val();
        var role = roleFld.val();

        var user = {
            //change id
            id: 999,
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: role
        }

        userService
            .createUser(user)
            .then(renderUsers)
    }

    function renderUsers(users) {
        tbody.empty()
        for(var u in users) {
            const user = users[u]
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username);
            rowClone.find('.wbdv-first-name').html(user.firstname);
            rowClone.find('.wbdv-last-name').html(user.lastname);
            rowClone.find('.wbdv-role').html(user.role);
            tbody.append(rowClone);
        }
    }

    function deleteUser(){
        
    }

    function selectUser(){

    }

    function updateUser(){
        
    }






})()