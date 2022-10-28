class Purchaseitem < ApplicationRecord
    belongs_to :vendor
    belongs_to :product
    belongs_to :invoice
    
end
