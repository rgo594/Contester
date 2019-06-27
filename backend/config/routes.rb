Rails.application.routes.draw do
      resources :users, :quizzes, :questions
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
end
