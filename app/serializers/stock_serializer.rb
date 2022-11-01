class StockSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :quantity
  belongs_to :product
end
