Rails.application.routes.draw do
  resources :repositories, only: [] do
    get :slack
  end

  namespace :webhooks do
    post :slack
    post :github
  end

  namespace :api do
    resource :user, only: :show do
      delete :sign_out
    end

    resources :repositories, only: :index do
      get :sync, on: :collection
    end
  end

  get '/auth/:provider/callback', to: 'sessions#create'


  get '*path', to: "home#index"

  root to: "home#index"
end
