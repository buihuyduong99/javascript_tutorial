

 function GetParameterValues(param) {  
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
    for (var i = 0; i < url.length; i++) {  
        var urlparam = url[i].split('=');  
        if (urlparam[0] == param) {  
            return urlparam[1];  
        }  
    }  
}  
(function () {
    let userId = GetParameterValues('user');
    getUser(userId);
})();
function getUser(userId) {
    
    var data = {
        page: 10,
        url: 'http://localhost:3000',
        userId: userId
    };

    return callUsersService(data);
}
function displayUsers(user){
    let htmlEl = $(`<img src="images/${user.username}_med.jpg">
    <span class="user-name user-info">${user.name.full}</span>
    <span class="user-gender user-info">${user.gender}</span>
    <span class="user-email user-info">${user.email}</span>
    <span class="user-street user-info">${user.location.street}</span>`);
    $("#userDetail").append(htmlEl);
}

function callUsersService(data) {
    const serviceUrl = `${data.url}/${data.userId}`;

    $.ajax(
          {
              url: serviceUrl,
              //data: data,
              type: "GET",
              timeout: 30000,
              success: function(answer) {
                displayUsers(answer);
              },
              error: function(XMLHttpRequest, textStatus, ErrorThrown) {
                  console.log(textStatus);
                  console.log(ErrorThrown);
                //   $(".comments").html(textStatus + "<br>" + ErrorThrown);
                // Show messsage error
                return {}
              },
              complete: function(XMLHttpRequest, textStatus) {
                console.log(XMLHttpRequest);
                // clear...
              }
          });
}