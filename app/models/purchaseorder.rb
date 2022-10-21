class Purchaseorder < ApplicationRecord
    has_many :invoices
    belongs_to :product
    belongs_to :vendor
end
