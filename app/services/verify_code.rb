class VerifyCode
  attr_reader :client, :code, :redirect_uri

  def initialize(code, repository_id)
    @client = Slack::Web::Client.new
    @code = code
    @redirect_uri = "http://744c7863.ngrok.io/repositories/#{repository_id}/slack"
  end

  def call
    client.oauth_access(
      code: code,
      client_id: ENV["SLACK_CLIENT_ID"],
      client_secret: ENV["SLACK_SECRET_ID"],
      redirect_uri: redirect_uri
    )
  end

  def self.call(code, redirect_uri)
    new(code, redirect_uri).call
  end
end
