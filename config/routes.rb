Rails.application.routes.draw do
  devise_for :users
  root "topics#index"
  resources :users
  resources :images
  resources :topics do
    collection do
      get 'profile', to: 'topics#profile'
    end
  end
end