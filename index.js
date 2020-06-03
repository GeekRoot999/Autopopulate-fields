<<<<<<< HEAD
const url = 'http://jsonplaceholder.typicode.com/users';
const users = document.querySelector('#users');
const person = document.querySelector('#name');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
const contact = document.querySelector('#contact');
const image = document.querySelector(".img-thumbnail")

let usersData = [];
fetch(url)
.then((resp) => resp.json())
.then(function(data){
    usersData = data;
    usersData.forEach((user) => {
    handleName(user);
    });
})
.catch(function(error) {
    console.log(JSON.stringify(error));
})


function handleView(value){
    var result = value.value;
    const userDetail = usersData.find(info => info.name == result);
    console.log(userDetail);
    person.value = userDetail.name;
    email.value = userDetail.email;
    address.value = userDetail.address.street+ " "+userDetail.address.suite+" "+userDetail.address.city+" "+userDetail.address.zipcode;
    contact.value = userDetail.phone;
    image.src = `https://robohash.org/test${userDetail.id}?size=100x100`
}


const handleName = (user) => {
    const option = document.createElement("option");
    const name = document.createTextNode(user.name);
    option.id = user.id;
    option.value = user.name; 
    option.appendChild(name);
    document.querySelector('select').appendChild(option);
    document.querySelector('#name').innerHTML = user.name;
=======
const url = 'http://jsonplaceholder.typicode.com/users';
const users = document.querySelector('#users');
const person = document.querySelector('#name');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
const contact = document.querySelector('#contact');
const image = document.querySelector(".img-thumbnail")

let usersData = [];
fetch(url)
.then((resp) => resp.json())
.then(function(data){
    usersData = data;
    usersData.forEach((user) => {
    handleName(user);
    });
})
.catch(function(error) {
    console.log(JSON.stringify(error));
})


function handleView(value){
    var result = value.value;
    const userDetail = usersData.find(info => info.name == result);
    console.log(userDetail);
    person.value = userDetail.name;
    email.value = userDetail.email;
    address.value = userDetail.address.street+ " "+userDetail.address.suite+" "+userDetail.address.city+" "+userDetail.address.zipcode;
    contact.value = userDetail.phone;
    image.src = `https://robohash.org/test${userDetail.id}?size=100x100`
}


const handleName = (user) => {
    const option = document.createElement("option");
    const name = document.createTextNode(user.name);
    option.id = user.id;
    option.value = user.name; 
    option.appendChild(name);
    document.querySelector('select').appendChild(option);
    document.querySelector('#name').innerHTML = user.name;
>>>>>>> 9cbe75340bc56bd7714b26cc3aaea070b20333c7
}