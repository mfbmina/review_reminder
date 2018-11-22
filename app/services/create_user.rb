class CreateUser
  attr_reader :callback

  def initialize(callback)
    @callback = callback
  end

  def call
    user = User.create(params)
    repositories = FetchRepos.call(user)
    user.repositories.create(repositories)
    user
  end

  def self.call(callback)
    new(callback).call
  end

  private

  def params
    {
      name: callback.info.name,
      email: callback.info.email,
      github_id: callback.uid,
      provider: callback.provider,
      github_token: callback.credentials.token
    }
  end
end
