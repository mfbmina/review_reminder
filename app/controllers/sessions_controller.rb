class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    auth = request.env['omniauth.auth']

    if user = User.find_by_provider_and_github_id(auth['provider'], auth['uid'])
      user.update_attribute(:github_token, auth.credentials.token)
    else
      user = CreateUser.call(auth)
    end

    session[:user_id] = user.id
    redirect_to root_url, notice: "Signed in!"
  end
end
