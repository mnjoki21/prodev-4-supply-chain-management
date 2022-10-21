class Product < ApplicationRecord
    belongs_to :category
    has_one :stock
end
