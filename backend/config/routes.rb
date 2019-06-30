Rails.application.routes.draw do

  resources :users, :quizzes, :questions
  post '/login', to: 'auth#create'
  get '/broadcast', to: 'questions#broadcast'
  get '/profile', to: 'users#profile'

  mount ActionCable.server => '/cable'
end
