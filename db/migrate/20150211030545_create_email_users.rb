class CreateEmailUsers < ActiveRecord::Migration
  def change
    create_table :email_users do |t|
      t.string :email

      t.timestamps
    end
  end
end
