module Api
  class UsersController < BaseController
    def show
      respond_to do |format|
        format.json do
          render json: @current_user
        end
      end
    end
  end
end
