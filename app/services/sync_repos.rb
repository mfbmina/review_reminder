class SyncRepos
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def call
    repositories = FetchGithubRepos.call(user)
    user.repositories.create(repositories)

    db_ids = user.repositories.pluck(:github_id)

    remove_ids = db_ids - repositories.map { |repo| repo[:github_id] }

    user.repositories.where(github_id: remove_ids).destroy_all

    user.repositories.reload
  end

  def self.call(user)
    new(user).call
  end
end
