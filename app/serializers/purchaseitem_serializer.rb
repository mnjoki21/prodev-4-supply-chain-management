class PurchaseitemSerializer < ActiveModel::Serializer
  attributes :product_id, :vendor_id, :quantity, :invoice_id

  belongs_to :product
  belongs_to :vendor
  belongs_to :invoice

end
