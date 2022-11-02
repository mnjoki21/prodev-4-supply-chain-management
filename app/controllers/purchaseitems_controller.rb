class PurchaseitemsController < ApplicationController
  before_action :set_purchaseitem, only: %i[ show update destroy ]
  # skip_before_action :authorize, only: :index

  # GET /purchaseitems
  def index
    @purchaseitems = Purchaseitem.all

    render json: @purchaseitems
  end

  # GET /purchaseitems/1
  def show
    render json: @purchaseitem
  end

  # POST /purchaseitems
  def create
    @purchaseitem = Purchaseitem.new(purchaseitem_params)
    @purchaseitem.save

    # creating new stock
    @stock = Stock.find_by(product_id: @purchaseitem[:product_id])
   if @stock == nil
    @stock = Stock.create(
    quantity: params[:quantity],
    product_id: params[:product_id]

  )
  
    else
      @stock[:quantity] += @purchaseitem[:quantity]
      @stock.save
     
    end
    render json: @purchaseitem
  end

  # PATCH/PUT /purchaseitems/1
  def update
    if @purchaseitem.update(purchaseitem_params)
      render json: @purchaseitem
    else
      render json: @purchaseitem.errors, status: :unprocessable_entity
    end
  end

  # DELETE /purchaseitems/1
  def destroy
    @purchaseitem.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_purchaseitem
      @purchaseitem = Purchaseitem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def purchaseitem_params
      params.require(:purchaseitem).permit(:product_id, :vendor_id, :quantity, :invoice_id)
    end
    def stock_params
      params.require(:stock).permit(:product_id, :quantity)
    end
end
