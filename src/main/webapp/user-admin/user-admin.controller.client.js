//TODO
//ADD PASSWORD FIELD TO USER HTML
//CLEAR FORM AFTER SUBMIT

(function () {
    var $userService = new UserService();
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $updateUserBtn, $createUserBtn, $deleteUserBtn;
    var $rowTemplate, tbody;
    var users = [];

    jQuery(main);
    
    function main() {
        $rowTemplate = jQuery('.wbdv-template');
        $createUserBtn = jQuery('.wbdv-create');
        $updateUserBtn = jQuery('.wbdv-update');
        $deleteUserBtn = jQuery(".wbdv-remove");
        $tbody = jQuery('tbody');
        $createUserBtn.click(createUser);
        $updateUserBtn.click(updateUser);
        $userService.findAllUsers().then(renderUsers);
        $deleteUserBtn.click(deleteUser);
    }
    
    function createUser() {
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstname = $('#firstNameFld').val();
        var lastname = $('#lastNameFld').val();
        var role = $('#roleFld').val();
       
        var user = {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: role
        }

        $('#usernameFld').val("");
        $('#passwordFld').val("");
        $('#firstNameFld').val("");
        $('#lastNameFld').val("");
        $('#roleFld').val("");
        //clear form here

        $userService
            .createUser(user)
            .then(function (actualUser){
                users.push(actualUser)
                renderUsers(users);
            })
    }

    function renderUsers(users) {
        $tbody.empty()
        for(let i = 0; i < users.length; i++) {
            var user = users[i]
            $tbody.append(`
                <tr class="wbdv-template wbdv-user">
                    <td class="wbdv-username">${user.username}</td>
                    <td>&nbsp;</td>
                    <td class="wbdv-first-name">${user.firstname}</td>
                    <td class="wbdv-last-name">${user.lastname}</td>
                    <td class="wbdv-role">${user.role}</td>
                    <td class="wbdv-actions">
                        <span class="float-right">
                            <i id="${i}" class="fa-2x fa fa-times wbdv-remove"></i>
                            <i id="${user._id}" class="fa-2x fa fa-pencil wbdv-edit"></i>
                        </span>
                    </td>
                </tr>
            `)
        }
        //
        //bind wbdv-remove $().click(deleteUser)
        jQuery(".wbdv-remove").click(deleteUser);
        jQuery(".wbdv-edit").click(selectUser);
        
        
    
        //$deleteUserBtn.click(deleteUser);
    }
 
    function deleteUser(event){

        var deleteBtn = jQuery(event.target);
        var currClass = deleteBtn.attr("class");
        var currIndex = deleteBtn.attr("id");

        var currId = users[currIndex]._id
        $userService
            .deleteUser(currId)
            .then(function(status){
                users.splice(currIndex, 1)
                renderUsers(users);
            })
    }

    var selectedUser = null;
    function selectUser(event){
        var selectBtn = jQuery(event.target);
        var currId = selectBtn.attr("id");
        selectedUser = users.find(user => user._id === currId)
        $usernameFld = $('#usernameFld');
        $usernameFld.val(selectedUser.username);
        $passwordFld = $('#passwordFld');
        $passwordFld.val(selectedUser.password);
        $firstNameFld = $('#firstNameFld');
        $firstNameFld.val(selectedUser.firstname);
        $lastNameFld = $('#lastNameFld');
        $lastNameFld.val(selectedUser.lastname);
        $roleFld = $('#roleFld');
        $roleFld.val(selectedUser.role);


    }

    function updateUser(){
        console.log(selectedUser)
        selectedUser.username = $usernameFld.val()
        selectedUser.password = $passwordFld.val()
        selectedUser.firstname = $firstNameFld.val()
        selectedUser.lastname = $lastNameFld.val()
        selectUser.role = $roleFld.val()
        $userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
    }

    function findUserById(id){

    }





})()