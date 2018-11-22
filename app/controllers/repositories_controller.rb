class RepositoriesController < ApplicationController
  before_action :set_repository

  def slack
    response = VerifyCode.call(params[:code], params[:repository_id])
    @repository.update(slack_data: response, enabled: true)
    redirect_to root_url
  end

  private

  def set_repository
    @repository = (current_user || User.first).repositories.find(params[:repository_id])
  end
end
