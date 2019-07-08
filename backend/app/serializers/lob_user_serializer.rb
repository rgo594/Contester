class LobUserSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :lobby
end
