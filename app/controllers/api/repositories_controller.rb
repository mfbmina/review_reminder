module Api
  class RepositoriesController < BaseController
    def index
      @repositories = current_user.repositories

      respond_to do |format|
        format.json do
          render json: @repositories
        end
      end
    end

    def show
      @repository = current_user.repositories.find(params[:id])

      respond_to do |format|
        format.json do
          render json: @repository
        end
      end
    end

    def sync
      @repositories = SyncRepos.call(current_user)

      respond_to do |format|
        format.json do
          render json: @repositories
        end
      end
    end
  end
end
