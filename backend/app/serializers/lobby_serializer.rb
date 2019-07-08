class LobbySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :lob_users
end
