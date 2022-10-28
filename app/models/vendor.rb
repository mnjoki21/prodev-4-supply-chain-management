class Vendor < ApplicationRecord
    has_many :purchaseitems
    has_many :products, through: :purchaseitems
    has_many :invoices
end
