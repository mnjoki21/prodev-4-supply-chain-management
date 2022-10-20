class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.integer :purchaseorder_id
      t.string :accountname
      t.integer :product_id
      t.integer :quantity
      t.float :amount
      t.integer :vendor_id

      t.timestamps
    end
  end
end
