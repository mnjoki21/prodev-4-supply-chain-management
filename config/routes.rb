Rails.application.routes.draw do
  
  resources :invoices
  resources :purchaseorders
  resources :purchaseitems
  resources :vendors
  resources :stocks
  resources :products
  resources :categories
  resources :users
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
