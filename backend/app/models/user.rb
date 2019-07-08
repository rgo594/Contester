class User < ApplicationRecord
  has_secure_password
  has_many :lob_users
  has_many :high_scores
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true


end
