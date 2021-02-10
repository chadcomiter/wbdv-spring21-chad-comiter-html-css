(function () {
    var $userService = new UserService();
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $updateUserBtn, $createUserBtn, $deleteUserBtn;
    var $rowTemplate, $tbody;


    jQuery(main);
    
    function main() {
        $rowTemplate = jQuery('.wbdv-template');
        $createUserBtn = jQuery('.wbdv-create');
        $deleteUserBtn = jQuery('.wbdv-remove');
        $updateUserBtn = jQuery('.wbdv-edit');
        $tbody = jQuery('tbody');

        $createUserBtn.click(createUser);
        $deleteUserBtn.click(deleteUser);
        $updateUserBtn.click(updateUser);
        $userService.findAllUsers().then(renderUsers);
    }
    
    function createUser() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $roleFld = $('#roleFld');

        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstname = $firstNameFld.val();
        var lastname = $lastNameFld.val();
        var role = $roleFld.val();
       
        var user = {
            //change id
            id: 999,
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: role
        }

        $userService
            .createUser(user)
            .then(renderUsers)
    }

    function renderUsers(users) {
        $tbody.empty()
        for(var u in users) {
            const user = users[u]
            const rowClone = $rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username);
            rowClone.find('.wbdv-first-name').html(user.firstname);
            rowClone.find('.wbdv-last-name').html(user.lastname);
            rowClone.find('.wbdv-role').html(user.role);
            rowClone.find('.wbdv-actions').find('.wbdv-remove').click(deleteUser);
            rowClone.find('.wbdv-actions').find('.wbdv-edit').click(updateUser);
            $tbody.append(rowClone);
        }
    }
 
    function deleteUser(event){
        alert('Working Button')
        currentTarget = $(event.currentTarget);
        const tr = currentTarget.parent().parent().parent();
        tr.remove();

    }

    function selectUser(){

    }

    function updateUser(){
        alert('Working Button')
    }

    function findUserById(id){

    }





})()