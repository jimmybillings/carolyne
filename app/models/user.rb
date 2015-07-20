class User < ActiveRecord::Base
	  # regex taken from Devise gem
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_presence_of :name, :gender
  validates :age, numericality: { only_integer: true }
end
