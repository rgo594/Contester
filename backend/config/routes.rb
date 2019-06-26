Rails.application.routes.draw do
      resources :users
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
end
