class RepositoriesController < ApplicationController
  before_action :set_repository

  def slack
    response = VerifyCode.call(params[:code], params[:repository_id])
    CreateGithubWebhook.call(@repository)
    @repository.update(slack_data: response, enabled: true)
    redirect_to "repositores/#{@repository.id}/success"
  end

  private

  def set_repository
    @repository = Repository.find(params[:repository_id])
  end
end
