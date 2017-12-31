// ({
//     //get username
//     //getUserDetail
//     //callUserService
// })()

function getUsers() {
    
    var data = {
        page: 10,
        url: 'http://localhost:3000'
    };

    callUsersService(data);
    return false;
}
function displayUsers(users){
    let ul = $("<ul></ul>");
    users.forEach(element => {
        let li = $(`<li><a href="user.html?user=${element.username}">${element.name.full}</a></li>`);
        ul.append(li);
    });
    $("#listUsers").append(ul);
}

function callUsersService(data) {
    const serviceUrl = data.url;

    $.ajax(
          {
              url: serviceUrl,
              //data: data,
              type: "GET",
              timeout: 30000,
              success: function(answer) {
                  const data = answer;
                  displayUsers(data);
              },
              error: function(XMLHttpRequest, textStatus, ErrorThrown) {
                  console.log(textStatus);
                  console.log(ErrorThrown);
                //   $(".comments").html(textStatus + "<br>" + ErrorThrown);
                // Show messsage error
              },
              complete: function(XMLHttpRequest, textStatus) {
                console.log(XMLHttpRequest);
                // clear...
              }
          });
}