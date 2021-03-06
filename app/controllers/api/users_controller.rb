module Api
  class UsersController < BaseController
    def show
      @user = current_user

      respond_to do |format|
        format.json do
          render json: @user
        end
      end
    end

    def sign_out
      reset_session

      respond_to do |format|
        format.json do
          render json: {}
        end
      end
    end
  end
end
