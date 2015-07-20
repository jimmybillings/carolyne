class Api::UsersController < ApplicationController
  respond_to :json

  def index
    serialized_users =
      ActiveModel::ArraySerializer
               .new(User.all, each_serializer: UserSerializer)

    render json: serialized_users
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user
    else
      render json: user.errors.messages, status: :bad_request
    end
  end


  # section omitted
  private

  def user_params
    attributes = [
      :age,
      :name,
      :email,
      :gender
    ]

    params.require(:user).permit(attributes)
  end
end