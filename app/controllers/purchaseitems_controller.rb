class PurchaseitemsController < ApplicationController
  before_action :set_purchaseitem, only: %i[ show update destroy ]

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

    if @purchaseitem.save
      render json: @purchaseitem, status: :created, location: @purchaseitem
    else
      render json: @purchaseitem.errors, status: :unprocessable_entity
    end
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
end
