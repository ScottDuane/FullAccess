class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, index: true, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false 
      t.timestamps
    end
  end
end
