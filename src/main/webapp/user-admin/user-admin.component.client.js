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
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: role
        }

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
        console.log(event.target);
        var deleteBtn = jQuery(event.target);
        var currClass = deleteBtn.attr("class");
        var currIndex = deleteBtn.attr("id");
        console.log(currClass);
        console.log(currIndex);
        var currId = users[currIndex]._id
        $userService
            .deleteUser(currId)
            .then(function(status){
                users.splice(currIndex, 1)
                renderUsers(users);
            })
    }

    function selectUser(){

    }

    function updateUser(){
        alert('Working Button')
    }

    function findUserById(id){

    }





})()