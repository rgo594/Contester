class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :update]

  def index
    @all = User.all
    render json: { users: @all }
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def exam
    @user = User.find_by(exam: params[:exam])
    render json: {user: @user}
  end

  def show
    @user = User.find(params[:id])
    render json: {user: @user}
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :exam, :avatar)
  end
end
