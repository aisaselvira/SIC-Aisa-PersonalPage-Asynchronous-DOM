fetch('https://api.github.com/users/aisaselvira')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('bio').innerHTML = data.bio
    document.getElementById('username').innerHTML = data.name
    document.getElementById('id').innerHTML = data.id
    document.getElementById('twitter').innerHTML = data.twitter_username
    document.getElementById('url').innerHTML = data.url
    document.getElementById('followers').innerHTML = data.followers
    document.getElementById('following').innerHTML = data.following

    document.getElementById('githubb').style.fontSize = "14px";
    document.getElementById('githubb').style.textAlign = "center";
    document.getElementById('githubb').style.padding = "15px";
    document.getElementById('githubb').style.backgroundColor = "#3F3A4E";
    document.getElementById('githubb').style.color = "white";
    document.getElementById('githubb').style.fontFamily = 'Parisienne', 'cursive';
    document.getElementById('githubb').style.fontStyle = "italic"; 
    document.getElementById('githubb').style.borderRadius = "30px"; 

    document.getElementById('avatar').style.width = "250px";
    document.getElementById('avatar').style.height = "250px";
    document.getElementById('avatar').style.borderRadius = "50%";
    document.getElementById('avatar').style.display = "block";
    document.getElementById('avatar').style.marginLeft = "auto";
    document.getElementById('avatar').style.marginRight = "auto";
    document.getElementById('avatar').style.padding = "20px";

    document.getElementById('bio').style.fontFamily = 'Niconne', 'cursive';
    document.getElementById('bio').style.fontSize = "30px";
    document.getElementById('bio').style.textAlign = "center";
    document.getElementById('bio').style.paddingTop = "50px"; 

    document.getElementById('quotes').style.fontFamily = 'Niconne', 'cursive';
    document.getElementById('quotes').style.fontSize = "30px";
    document.getElementById('quotes').style.textAlign = "center";
    document.getElementById('quotes').style.paddingTop = "20px"; 
    document.getElementById('quotes').style.color = "black"; 

    document.getElementById('githubsaya').style.backgroundImage = "linear-gradient(rgb(185, 166, 255), rgb(238, 223, 255))";
    document.getElementById('githubsaya').style.paddingBottom = "4rem";
    document.getElementById('githubsaya').style.borderRadius = "30px"; 

    document.getElementById('text-username').style.textAlign = "center";
    document.getElementById('text-username').style.fontSize = "20px";
    document.getElementById('text-username').style.fontFamily = 'Reem Kufi', 'sans-serif';
    document.getElementById('text-username').style.paddingTop = "3rem"; 
    document.getElementById('text-username').style.color = "white";

    document.getElementById('text-id').style.textAlign = "center";
    document.getElementById('text-id').style.fontSize = "20px";
    document.getElementById('text-id').style.fontFamily = 'Reem Kufi', 'sans-serif';
    document.getElementById('text-id').style.paddingTop = "20px";
    document.getElementById('text-id').style.color = "white";

    document.getElementById('text-twitter').style.textAlign = "center";
    document.getElementById('text-twitter').style.fontSize = "20px";
    document.getElementById('text-twitter').style.fontFamily = 'Reem Kufi', 'sans-serif';
    document.getElementById('text-twitter').style.paddingTop = "20px";
    document.getElementById('text-twitter').style.color = "white";

    document.getElementById('text-url').style.textAlign = "center";
    document.getElementById('text-url').style.fontSize = "20px";
    document.getElementById('text-url').style.fontFamily = 'Reem Kufi', 'sans-serif';
    document.getElementById('text-url').style.paddingTop = "3rem"; 
    document.getElementById('text-url').style.color = "white";

    document.getElementById('text-followers').style.textAlign = "center";
    document.getElementById('text-followers').style.fontSize = "20px";
    document.getElementById('text-followers').style.fontFamily = 'Reem Kufi', 'sans-serif';
    document.getElementById('text-followers').style.paddingTop = "3rem"; 
    document.getElementById('text-followers').style.color = "white";

    document.getElementById('text-following').style.textAlign = "center";
    document.getElementById('text-following').style.fontSize = "20px";
    document.getElementById('text-following').style.fontFamily = 'Reem Kufi', 'sans-serif';
    document.getElementById('text-following').style.paddingTop = "3rem"; 
    document.getElementById('text-following').style.color = "white";

    document.getElementById('name').style.textAlign = "center";
    document.getElementById('name').style.padding = "20px";
    document.getElementById('name').style.borderRadius = "20px";

    document.getElementById('id-github').style.textAlign = "center";
    document.getElementById('id-github').style.padding = "20px";
    document.getElementById('id-github').style.borderRadius = "20px";

    document.getElementById('twitter-username').style.textAlign = "center";
    document.getElementById('twitter-username').style.padding = "20px";
    document.getElementById('twitter-username').style.borderRadius = "20px";

    document.getElementById('url-github').style.textAlign = "center";
    document.getElementById('url-github').style.padding = "20px";
    document.getElementById('url-github').style.borderRadius = "20px";

    document.getElementById('followers-github').style.textAlign = "center";
    document.getElementById('followers-github').style.padding = "20px";
    document.getElementById('followers-github').style.borderRadius = "20px";

    document.getElementById('following-github').style.textAlign = "center";
    document.getElementById('following-github').style.padding = "20px";
    document.getElementById('following-github').style.borderRadius = "20px";
  
    document.getElementById('button-name').style.borderRadius = "20px";
    document.getElementById('button-name').style.border = "none";
    document.getElementById('button-name').style.backgroundColor = "#443A57";
    document.getElementById('button-name').style.height = "86px";

    document.getElementById('button-id').style.borderRadius = "20px";
    document.getElementById('button-id').style.border = "none";
    document.getElementById('button-id').style.backgroundColor = "#443A57";
    document.getElementById('button-id').style.height = "86px";

    document.getElementById('button-twitter').style.borderRadius = "20px";
    document.getElementById('button-twitter').style.border = "none";
    document.getElementById('button-twitter').style.backgroundColor = "#443A57";
    document.getElementById('button-twitter').style.height = "86px";

    document.getElementById('button-url').style.borderRadius = "20px";
    document.getElementById('button-url').style.border = "none";
    document.getElementById('button-url').style.backgroundColor = "#443A57";
    document.getElementById('button-url').style.height = "86px";

    document.getElementById('button-followers').style.borderRadius = "20px";
    document.getElementById('button-followers').style.border = "none";
    document.getElementById('button-followers').style.backgroundColor = "#443A57";
    document.getElementById('button-followers').style.height = "86px";

    document.getElementById('button-following').style.borderRadius = "20px";
    document.getElementById('button-following').style.border = "none";
    document.getElementById('button-following').style.backgroundColor = "#443A57";
    document.getElementById('button-following').style.height = "86px";

    document.getElementById('username').style.width = "300px";
    document.getElementById('username').style.height = "40px";
    document.getElementById('username').style.color = "black";
    document.getElementById('username').style.backgroundColor = "#DEC6E2";
    document.getElementById('username').style.borderRadius = "20px";
    document.getElementById('username').style.fontSize = "18px";
    document.getElementById('username').style.paddingTop = "20px";
    document.getElementById('username').style.textAlign = "center";
    document.getElementById('username').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    document.getElementById('username').style.fontFamily = 'Reem Kufi', 'sans-serif';

    document.getElementById('id').style.width = "300px";
    document.getElementById('id').style.height = "40px";
    document.getElementById('id').style.color = "black";
    document.getElementById('id').style.backgroundColor = "#DEC6E2";
    document.getElementById('id').style.borderRadius = "20px";
    document.getElementById('id').style.fontSize = "18px";
    document.getElementById('id').style.textAlign = "center";
    document.getElementById('id').style.paddingTop = "20px";
    document.getElementById('id').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    document.getElementById('id').style.fontFamily = 'Reem Kufi', 'sans-serif';

    document.getElementById('twitter').style.width = "300px";
    document.getElementById('twitter').style.height = "40px";
    document.getElementById('twitter').style.color = "black";
    document.getElementById('twitter').style.backgroundColor = "#DEC6E2";
    document.getElementById('twitter').style.borderRadius = "20px";
    document.getElementById('twitter').style.fontSize = "18px";
    document.getElementById('twitter').style.paddingTop = "20px";
    document.getElementById('twitter').style.textAlign = "center";
    document.getElementById('twitter').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    document.getElementById('twitter').style.fontFamily = 'Reem Kufi', 'sans-serif';

    document.getElementById('url').style.width = "350px";
    document.getElementById('url').style.height = "40px";
    document.getElementById('url').style.color = "black";
    document.getElementById('url').style.backgroundColor = "#DEC6E2";
    document.getElementById('url').style.borderRadius = "20px";
    document.getElementById('url').style.fontSize = "18px";
    document.getElementById('url').style.textAlign = "center";
    document.getElementById('url').style.paddingTop = "20px";
    document.getElementById('url').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    document.getElementById('url').style.fontFamily = 'Reem Kufi', 'sans-serif';

    document.getElementById('followers').style.width = "300px";
    document.getElementById('followers').style.height = "40px";
    document.getElementById('followers').style.color = "black";
    document.getElementById('followers').style.backgroundColor = "#DEC6E2";
    document.getElementById('followers').style.borderRadius = "20px";
    document.getElementById('followers').style.fontSize = "18px";
    document.getElementById('followers').style.paddingTop = "20px";
    document.getElementById('followers').style.textAlign = "center";
    document.getElementById('followers').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    document.getElementById('followers').style.fontFamily = 'Reem Kufi', 'sans-serif';

    document.getElementById('following').style.width = "300px";
    document.getElementById('following').style.height = "40px";
    document.getElementById('following').style.color = "black";
    document.getElementById('following').style.backgroundColor = "#DEC6E2";
    document.getElementById('following').style.borderRadius = "20px";
    document.getElementById('following').style.fontSize = "18px";
    document.getElementById('following').style.paddingTop = "20px";
    document.getElementById('following').style.textAlign = "center";
    document.getElementById('following').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    document.getElementById('following').style.fontFamily = 'Reem Kufi', 'sans-serif';


})

document.getElementById("button-name").addEventListener("click", handleClick);
function handleClick() {
      console.log("tes");
      alert("Username Github saya adalah : Aisa Selvira, Silahkan klik OK untuk mengunjungi akun github saya");
}