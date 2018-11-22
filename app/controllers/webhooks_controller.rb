class WebhooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def slack
    # SendMessage.call(params[:webhook])

    render plain: ''
  end

  def github
    repository = Repository.find_by(github_id: params.dig(:repository, :id))

    return render plain: '', status: :no_content if params.dig(:pull_request, :requested_reviewers).blank? || !repository&.enabled?

    SendMessage.call(
      repository.slack_data,
      params.dig(:pull_request, :requested_reviewers),
      params.dig(:pull_request, :html_url)
    )
  end
end
