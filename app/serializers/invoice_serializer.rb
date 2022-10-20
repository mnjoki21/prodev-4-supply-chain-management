class InvoiceSerializer < ActiveModel::Serializer
  attributes  :purchaseorder_id, :accountname, :product_id, :quantity, :amount, :vendor_id
    belongs_to :vendor
    belongs_to :product
    belongs_to :purchaseorder
end
