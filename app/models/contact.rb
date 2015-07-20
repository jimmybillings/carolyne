class Contact < ActiveRecord::Base
	validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
	validates :telephone, numericality: { only_integer: true }
	validates_presence_of :name, :subject, :message
end

