class PurchaseorderSerializer < ActiveModel::Serializer
  attributes  :id, :number, :product_id, :quantity, :amount, :vendor_id
  belongs_to :vendor
  belongs_to :product
end
