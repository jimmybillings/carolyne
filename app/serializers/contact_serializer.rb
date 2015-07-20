class ContactSerializer < ActiveModel::Serializer
  attributes :name, :email, :telephone, :subject, :message
end