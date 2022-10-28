class Product < ApplicationRecord
    belongs_to :category
    has_one :stock
    has_many :purchaseitems
    has_many :vendors, through: :purchaseitems
    has_many :purchaseorders
    has_many :vendors, through: :purchaseorders
    has_many :invoices
end
