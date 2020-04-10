Rails.application.routes.draw do
  root "tops#index"
  resources :tops do
    collection do
      get 'profile', to: 'tops#profile'
    end
  end
end
