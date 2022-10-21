class Invoice < ApplicationRecord
    belongs_to :vendor
    belongs_to :product
    belongs_to :purchaseorder
end
