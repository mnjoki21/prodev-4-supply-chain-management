class StockSerializer < ActiveModel::Serializer
  attributes  :product_id, :quantity
  belongs_to :product
end
