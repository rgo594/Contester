class QuizzesController < ApplicationController
  skip_before_action :authorized

  def index
    @all = Quiz.all
    render json: {quizzes:@all}
  end

  def show
    @quiz = Quiz.find(params[:id])
    render json: {quizzes: @quiz}
  end

end
