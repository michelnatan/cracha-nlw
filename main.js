const linksSocialMedia = {
    github: 'michelnatan',
    youtube: 'UCEJOC-RvUsYinZS0YRTDFdA',
    facebook: 'michel.natan.10',
    instagram: 'michelnatan_',
    twitter: 'michelnatan_'
}


function changeSocialMediaLinks() {
    /* document.getElementById('userName').textContent = 'Michel Feyh'*/
    userName.textContent = 'Michel Feyh'

    for (li of socialLinks.children) {
        const social = li.getAttribute('class')

        //Condição especial para youtube devido o /channel
        if (linksSocialMedia[social] == linksSocialMedia.youtube) {
            li.children[0].href = `https://${social}.com/channel/${linksSocialMedia[social]}`
        } else {
            //necessario usar crase para incluir variaveis  
            li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
            //alert(li.children[0].href)
        }
    }
}


changeSocialMediaLinks()

function getgitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    //Utilizando ARROW FUNCTION em THEN, response = argumento recebidos
    //Pegando o retorno do fetch(url) e transformando em json.
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })


}


getgitHubProfileInfos()
