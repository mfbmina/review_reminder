Rails.application.routes.draw do
  resources :repositories, only: [] do
    get :slack
  end

  namespace :webhooks do
    post :slack
    post :github
  end

  namespace :api do
    resources :repositories, only: :index
  end

  get '/auth/:provider/callback', to: 'sessions#create'

  delete "/sign_out" => "sessions#destroy", as: :sign_out

  get '*path', to: "home#index"

  root to: "home#index"
end
