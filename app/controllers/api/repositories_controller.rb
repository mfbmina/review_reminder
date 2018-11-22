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
