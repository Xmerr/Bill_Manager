class Api::V1::BillsController < ApplicationController
  def index
    bill = Bill.all.order(date: :desc)
    render json: bill
  end

  def create
    bill = Bill.create!(bill_params)
    if bill
      render json: bill
    else
      render json: bill.errors
    end
  end

  def show
    if bill
      render json: bill
    else
      render json: bille.errors
    end
  end

  def destroy
    bill&.destroy
    render json: { ok: true, message: 'Bill Destroyed!' }
  end

  private

  def bill_params
    params.permit(:date, :savings, :debt)
  end

  def bill
    @bill ||= Bill.find(params[:id])
  end
end
