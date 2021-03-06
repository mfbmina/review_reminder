module Api
  class BaseController < ::ApplicationController
    before_action :authenticate_member!

    private

    def authenticate_member!
      return if current_user.present?

      respond_to do |format|
        format.json do
          render json: {}, status: :forbidden
        end
      end
    end
  end
end
