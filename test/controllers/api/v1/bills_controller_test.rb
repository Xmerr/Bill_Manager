require 'test_helper'

class Api::V1::BillsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_bills_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_bills_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_bills_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_bills_destroy_url
    assert_response :success
  end

end
