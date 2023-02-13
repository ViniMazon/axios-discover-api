const url = "http://localhost:5500/api"

function getUsers(){

    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, newUser)
    .then(response)
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar

    })
    .catch(error => console.error(error))

}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => {

    })
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))

}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Osasco"
}

const userUpdated = {
    name: "Marcelo",
    avatar: "https://picsum.photos/200/300",
    city:"Recife"

}

getUsers()
addNewUser()
getUser(1)
updateUser(1, userUpdated)
deleteUser(2)
