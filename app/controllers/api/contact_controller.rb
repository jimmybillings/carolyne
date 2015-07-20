class Api::ContactController < ApplicationController
  respond_to :json

  def index
    fields = Array.new
    fields << { name: 'name', type: 'input', value: 'text', label: 'Name'}
    fields << { name: 'email', type: 'input', value: 'text', label: 'Email'}
    fields << { name: 'telephone',type: 'input', value: 'text', label: 'Telephone'}
    fields << { name: 'subject', type: 'input', value: 'text', label: 'Subject'}
    fields << { name: 'message', type: 'textarea', value: 'text', label: 'Message'}
    render json: fields
  end

  def create
    @contact = Contact.new(user_params)
    if @contact.save
      render json: { success: 'Thank you for your message, ill be in touch soon!' }, status: :ok
    else
      binding.pry
      render json: { messages: @contact.errors.messages }.to_json, status: :bad_request
    end
  end

  def signup_create
    @email_user = EmailUsers.new(user_params)
    if @email_user.save
      render json: { success: 'Thanks for signing up!'}, status: :ok
    else
      render json: { messages: @email_user.errors }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:contact).permit(:name, :email, :telephone, :subject, :message)
  end

end