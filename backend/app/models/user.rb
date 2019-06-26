class User < ApplicationRecord
  has_secure_password
  has_many :arenas
  has_many :quizzes, through: :arenas
end
