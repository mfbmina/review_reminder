class SendMessage
  attr_reader :client, :slack_data, :requested_reviewers, :link

  def initialize(slack_data, requested_reviewers, link)
    @client = Slack::Web::Client.new(token: slack_data.dig("bot", "bot_access_token"))
    @slack_data = slack_data
    @requested_reviewers = requested_reviewers
    @link = link
  end

  def call
    client.chat_postMessage(
      channel: slack_data.dig("incoming_webhook", "channel_id"),
      text: message,
      as_user: false
    )
  end

  def self.call(repository, requested_reviewers, link)
    new(repository, requested_reviewers, link).call
  end

  private

  def message
    "Hello #{normalized_handlers}! Your review is required on #{link}"
  end

  def normalized_handlers
    requested_reviewers.map do |reviewer|
      "<@#{reviewer["login"]}>"
    end.join(', ')
  end
end
