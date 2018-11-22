module Api
  class RepositoriesController < BaseController
    def index
      current_user = User.first

      @repositories = current_user.repositories

      respond_to do |format|
        format.json do
          render json: @repositories
        end
      end
    end
  end
end
