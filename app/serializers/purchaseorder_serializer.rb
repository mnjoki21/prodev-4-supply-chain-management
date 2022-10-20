class PurchaseorderSerializer < ActiveModel::Serializer
  attributes  :number, :product_id, :quantity, :amount, :vendor_id
end
