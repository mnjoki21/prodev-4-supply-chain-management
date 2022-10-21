class VendorSerializer < ActiveModel::Serializer
  attributes  :name, :email, :address, :phone_number
end
