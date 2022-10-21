class PurchaseordersController < ApplicationController
  before_action :set_purchaseorder, only: %i[ show update destroy ]

  # GET /purchaseorders
  def index
    @purchaseorders = Purchaseorder.all

    render json: @purchaseorders
  end

  # GET /purchaseorders/1
  def show
    render json: @purchaseorder
  end

  # POST /purchaseorders
  def create
    @purchaseorder = Purchaseorder.new(purchaseorder_params)

    if @purchaseorder.save
      render json: @purchaseorder, status: :created, location: @purchaseorder
    else
      render json: @purchaseorder.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /purchaseorders/1
  def update
    if @purchaseorder.update(purchaseorder_params)
      render json: @purchaseorder
    else
      render json: @purchaseorder.errors, status: :unprocessable_entity
    end
  end

  # DELETE /purchaseorders/1
  def destroy
    @purchaseorder.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_purchaseorder
      @purchaseorder = Purchaseorder.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def purchaseorder_params
      params.require(:purchaseorder).permit(:number, :product_id, :quantity, :amount, :vendor_id)
    end
end
