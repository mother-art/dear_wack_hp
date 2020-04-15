Rails.application.routes.draw do
  root "topics#index"
  resources :topics do
    collection do
      get 'profile', to: 'topics#profile'
    end
  end
end
