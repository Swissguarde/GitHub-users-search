class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-3">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="bg bg-primary">Public Repos: ${user.public_repos}</span>
                <span class="bg bg-secondary">Public Gists: ${user.gists}</span>
                <span class="bg bg-success">Followers: ${user.followers}</span>
                <span class="bg bg-success">Following: ${user.following}</span> 
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div> 
    `;
  }

  // Show user repos
  showRepos(repos){
    let output = ''
    repos.forEach((repo)=>{
        output += `
               <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.name}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="bg bg-primary"
              >Stars: ${repo.stargazers_count}</span
            >
            <span class="bg bg-secondary">Watchers ${repo.watchers_count}</span>
            <span class="bg bg-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
        `;
        document.getElementById('repos').innerHTML = output
    })
  }














  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    // Clear remaining alerts
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".search-container");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
        this.clearAlert()
    }, 3000);
  }
}
