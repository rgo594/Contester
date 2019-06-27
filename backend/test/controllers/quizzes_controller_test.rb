require 'test_helper'

class QuizzesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get quizzes_index_url
    assert_response :success
  end

  test "should get show" do
    get quizzes_show_url
    assert_response :success
  end

  test "should get new" do
    get quizzes_new_url
    assert_response :success
  end

  test "should get create" do
    get quizzes_create_url
    assert_response :success
  end

  test "should get update" do
    get quizzes_update_url
    assert_response :success
  end

  test "should get delete" do
    get quizzes_delete_url
    assert_response :success
  end

end
