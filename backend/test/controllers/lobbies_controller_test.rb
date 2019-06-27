require 'test_helper'

class LobbiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lobbies_index_url
    assert_response :success
  end

  test "should get show" do
    get lobbies_show_url
    assert_response :success
  end

  test "should get new" do
    get lobbies_new_url
    assert_response :success
  end

  test "should get create" do
    get lobbies_create_url
    assert_response :success
  end

  test "should get update" do
    get lobbies_update_url
    assert_response :success
  end

  test "should get delete" do
    get lobbies_delete_url
    assert_response :success
  end

end
