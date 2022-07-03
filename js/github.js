class GitHub {
  constructor() {
    this.client_id = 'bd397bb8235e8dc66682'
    this.client_secret = "c09cbcb4646baa0849417b9a8512cf741d04c554";
    this.repos_count = 10
    this.repos_sort = 'created: asc'
  }  

  async getUser(user) {
    const profileResp = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResp = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResp.json();
    const repos = await repoResp.json();
    return {
      profile,
      repos
    };
  }
}
