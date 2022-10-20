Rails.application.routes.draw do
  resources :purchaseorders
  resources :purchaseitems
  resources :vendors
  resources :stocks
  resources :products
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
