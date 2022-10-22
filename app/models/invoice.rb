class Invoice < ApplicationRecord
    belongs_to :vendor
    belongs_to :product
    belongs_to :purchaseorder
    has_many :purchaseitems
end
