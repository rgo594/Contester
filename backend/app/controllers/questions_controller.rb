class QuestionsController < ApplicationController
  skip_before_action :authorized

  def index
    @all = Question.all
    ActionCable.server.broadcast('feed_channel', { will_it: 'work?'})
    render json: {questions:@all}
  end

  def broadcast
    ActionCable.server.broadcast('feed_channel', { will_it: 'work?'})
  end

  def show
    @question = Question.find(params[:id])
    render json: {questions: @question}
  end

end
