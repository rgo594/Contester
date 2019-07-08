class HighScoresController < ApplicationController
  skip_before_action :authorized

  def index
    @all = HighScore.all
    render json: { high_scores: @all }
  end

  def show
    @high_score = HighScore.find(params[:id])
    render json: { high_score: @high_score }
  end

  def create
    @high_score = HighScore.create(score_params)
    render json: { high_score: @high_score }
  end

  def update
    @high_score = HighScore.find(params[:id])
    @high_score.update(score_params)
    render json: { high_score: @high_score }
  end

  def delete
  end

  private

  def score_params
    params.require(:high_score).permit(:score, :username, :subject, :user_id, :id, :times_taken)
  end

end
