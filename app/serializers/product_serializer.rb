class ProductSerializer < ActiveModel::Serializer
  attributes  :name, :description, :category_id
  belongs_to :category

end
