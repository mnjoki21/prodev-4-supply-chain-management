class ProductSerializer < ActiveModel::Serializer
  attributes  :name, :description, :category_id
  belongs_to :category
  has_one :stock
end
