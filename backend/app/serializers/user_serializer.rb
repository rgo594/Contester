class UserSerializer < ActiveModel::Serializer
   attributes :username, :avatar, :id
   has_many :lob_users
end
