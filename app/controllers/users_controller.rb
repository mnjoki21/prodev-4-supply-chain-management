class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  skip_before_action :is_admin?, only: [:show, :create]


  def index
    users = User.all
    render json:  users
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
