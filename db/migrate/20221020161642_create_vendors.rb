class CreateVendors < ActiveRecord::Migration[7.0]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :email
      t.string :address
      t.integer :phone_number

      t.timestamps
    end
  end
end
