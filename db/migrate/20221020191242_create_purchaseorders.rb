class CreatePurchaseorders < ActiveRecord::Migration[7.0]
  def change
    create_table :purchaseorders do |t|
      t.integer :number
      t.integer :product_id
      t.integer :quantity
      t.float :amount
      t.integer :vendor_id

      t.timestamps
    end
  end
end
