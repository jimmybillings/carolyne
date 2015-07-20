class EmailUsers < ActiveRecord::Base
	validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
end
