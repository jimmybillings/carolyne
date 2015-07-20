class CreateBlocks < ActiveRecord::Migration
  def change
    create_table :blocks do |t|
      t.string :page
      t.string :usecase
      t.text :content

      t.timestamps
    end
  end
end
