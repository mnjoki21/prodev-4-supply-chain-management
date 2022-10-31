class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category_id
  belongs_to :category
  

end
