const userJSONurl = 'https://randomuser.me/api/?results=10';
const users = document.querySelector('#users');
const person = document.querySelector('#name');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
const contact = document.querySelector('#contact');
const image = document.querySelector(".img-thumbnail")

let usersData = [];
fetch(userJSONurl)     
.then((resp) => resp.json())
.then(function(data){
    usersData = data.results;
    usersData.forEach((user) => {
    handleName(user);
    });
})
.catch(function(error) {
    console.log(JSON.stringify(error));
})


function handleView(value){
    var result = value.value;
    const userDetail = usersData.find(info => info.name.first+" " +info.name.last == result);
    person.value = userDetail.name.first+" "+userDetail.name.last;
    email.value = userDetail.email;
    address.value = userDetail.location.street.number+ " "+userDetail.location.street.name+ " "+userDetail.location.city+" "+userDetail.location.state+" "+userDetail.location.country+" "+userDetail.location.postcode+ " ";
    contact.value = userDetail.phone;
    image.id = userDetail.id.value;
    image.src = `https://robohash.org/test${image.id}?size=100x100`
}


const handleName = (user) => {
    const option = document.createElement("option");
    const name = document.createTextNode(user.name.first+" "+user.name.last);
    option.id = user.nat;
    option.value = user.name.first+" "+user.name.last; 
    option.appendChild(name);
    document.querySelector('select').appendChild(option);
    document.querySelector('#name').innerHTML = user.name.first+" "+user.name.last;
}
