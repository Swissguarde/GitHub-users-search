const github = new GitHub;
const ui = new UI
// Search input
const searchUser = document.getElementById("search-user");


// Event listener
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText)
    .then(data => {
        console.log(data);
        if(data.profile.message === 'Not Found'){
            // Show Alert
            ui.showAlert(`${userText} not found`, 'alert alert-danger')

        } else{
            ui.showProfile(data.profile)
            ui.showRepos(data.repos)
        }
    })
  } else {
    // Clear profile
    ui.clearProfile()
  }
});
