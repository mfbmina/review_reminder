class CreateGithubWebhook
  attr_reader :client, :repository

  def initialize(repository)
    @client = Octokit::Client.new(access_token: repository.user.github_token)
    @repository = repository
  end

  def call
    client.create_hook(repository.full_name, 'web', url_params, required_hooks)
  end

  def self.call(user)
    new(user).call
  end

  private

  def url_params
    { url: "http://a0e6ee4a.ngrok.io/webhooks/github", content_type: 'json' }
  end

  def required_hooks
    { events: ['pull_request'], active: true }
  end
end
