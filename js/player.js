// let ajax = new XMLHttpRequest();
//
// // ajax.addEventListener("readystatechange", (e) => {
// //     if(ajax.readyState === 4) {
// //         console.log(ajax.response);
// //     }
// // });
//
// ajax.addEventListener("timeout", function () {
//     console.log("timeout Error");
// });
//
// ajax.addEventListener("load", ev => {
//     console.log( ajax.status);
// });
//
// ajax.addEventListener("error", ev => {
//     console.log(ajax.error);
// });
//
// ajax.open("Get", "https://jsonplaceholder.typicode.com/posts");
//
// ajax.timeout = 2;
//
// ajax.setRequestHeader("Content-type", "application/json");
//
// ajax.send();

ajax.Start({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    timeout: 3000,
    info: function (elem) {
        console.log(elem);
    },
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    error: function (obj) {
        console.log(obj.errorType, obj.errorTypeText)
    }
});

// ajax.Start({
//     method: "POST",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     data: {
//         userId: 150,
//         id: 150,
//         title: "Dmitry message",
//         body: "quia et suscipit suscipit recusandae consequuntur expedita et cum"
//
// },
//     timeout: 3000,
//     info: function (elem) {
//         console.log(elem);
//     },
//     error: function (obj) {
//         console.log(obj.errorType, obj.errorTypeText)
//     }
// });
