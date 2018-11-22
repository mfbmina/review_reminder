class FetchGithubRepos
  attr_reader :client

  def initialize(user)
    @client = Octokit::Client.new(access_token: user.github_token)
  end

  def call
    client.repos({}, query: {type: 'all', sort: 'asc'}).map do |repo|
      {
        github_id: repo[:id],
        github_owner_username: repo[:owner][:login],
        github_owner_id: repo[:owner][:id],
        full_name: repo[:full_name]
      }
    end
  end

  def self.call(user)
    new(user).call
  end
end
