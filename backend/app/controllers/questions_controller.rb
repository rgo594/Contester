class QuestionsController < ApplicationController
  skip_before_action :authorized

  def index
    @all = Question.all
    render json: {questions:@all}
  end

  def show
    @question = Question.find(params[:id])
    render json: {questions: @question}
  end

end
