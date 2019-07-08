Rails.application.routes.draw do

  resources :users, :quizzes, :questions, :high_scores
  post '/login', to: 'auth#create'
  get '/broadcast', to: 'questions#broadcast'
  get '/profile', to: 'users#profile'
  get '/exam/:exam', to: 'users#exam'

  mount ActionCable.server => '/cable'
end
