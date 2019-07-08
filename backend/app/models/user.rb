class User < ApplicationRecord
  has_secure_password
  has_many :lob_users
  has_one :high_score
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true


end
