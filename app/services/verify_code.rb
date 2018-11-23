class VerifyCode
  include Rails.application.routes.url_helpers

  attr_reader :client, :code, :repository_id

  def initialize(code, repository_id)
    @client = Slack::Web::Client.new
    @code = code
    @repository_id = repository_id
  end

  def call
    client.oauth_access(
      code: code,
      client_id: ENV["SLACK_CLIENT_ID"],
      client_secret: ENV["SLACK_SECRET_ID"],
      redirect_uri: repository_slack_url(repository_id)
    )
  end

  def self.call(code, repository_id)
    new(code, repository_id).call
  end
end
