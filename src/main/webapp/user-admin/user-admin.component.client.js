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
        $updateUserBtn = jQuery('.wbdv-edit');
        $tbody = jQuery('tbody');
        $createUserBtn.click(createUser);
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
            id: Math.floor(Math.random() * Math.floor(100000)),
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
            rowClone.find('.wbdv-actions').find('.wbdv-remove').attr('id', user.id);
            rowClone.find('.wbdv-actions').find('.wbdv-edit').click(updateUser);
            $tbody.append(rowClone);
        }
        //
        //bind wbdv-remove $().click(deleteUser)
        $('.wbdv-remove').click(deleteUser);
        
    
        //$deleteUserBtn.click(deleteUser);
    }
 
    function deleteUser(event){
        alert('Working Button')
        const tr = $(event.currentTarget).parent().parent().parent();
        tr.remove();
        var id = $(event.currentTarget).attr('id');
        $userService
            .deleteUser(event)
            .then(renderUsers)
    }

    function selectUser(){

    }

    function updateUser(){
        alert('Working Button')
    }

    function findUserById(id){

    }





})()