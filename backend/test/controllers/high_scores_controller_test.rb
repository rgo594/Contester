require 'test_helper'

class HighScoresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get high_scores_index_url
    assert_response :success
  end

  test "should get show" do
    get high_scores_show_url
    assert_response :success
  end

  test "should get create" do
    get high_scores_create_url
    assert_response :success
  end

  test "should get update" do
    get high_scores_update_url
    assert_response :success
  end

  test "should get delete" do
    get high_scores_delete_url
    assert_response :success
  end

end
