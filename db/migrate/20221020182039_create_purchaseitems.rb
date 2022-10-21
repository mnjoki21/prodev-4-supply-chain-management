class CreatePurchaseitems < ActiveRecord::Migration[7.0]
  def change
    create_table :purchaseitems do |t|
      t.integer :product_id
      t.integer :vendor_id
      t.integer :invoice_id
      t.integer :quantity
      
      t.timestamps
    end
  end
end
