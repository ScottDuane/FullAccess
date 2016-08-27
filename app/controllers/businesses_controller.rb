class BusinessesController < ApplicationController
  def index
    @businesses = Business.all
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render json: @business
    else
      render @business[:errors].full_messages
    end
  end

  private
  def business_params
    params.require(:business).permit(:name, :latitude, :longitude)
  end

end
