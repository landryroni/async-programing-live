const fetch = require("node-fetch")


function getUserInfo(username){
    const url = `https://api.github.com/users/${username}`;

    return fetch(url).then((resp) => {
        return resp.json()
    });
    
}

function getRepos(username) {
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url)
        .then((resp)=>  resp.json())

}

function getFollowings(username){
    let url = `https://api.github.com/users/${username}/following`;
    return fetch(url)
        .then((resp)=>  resp.json())
}

function getFollowedRespositories(username){
    getUserInfo("landryroni")
        .then((user)=> {
            console.log(`the user ${username} is following ${user.following} users`)
            return getFollowings(username)
        }).then((followings)=> {
            console.log("followings:",followings)
            return followings.map(user => user.login)
        }).then((usernames) => {
            console.log("Username:", usernames)
            return Promise.all(usernames.map(username => {
                return getRepos(username)
            }))
        }).then(repos => {
            let flattenedRepos = repos.flat()
            let repoNames = flattenedRepos.map(repo => repo.full_name)
            console.log("Total number of repos", repoNames.length)
            console.log("Repos", repos.length)
            console.log("sample repos", repoNames.slice(0.4))
        })

}

// let resultPromise = getFollowedRespositories("landryroni")
//     .then((data)=> console.log(data[0]))
// console.log("Result", resultPromise)

getFollowedRespositories("landryroni")