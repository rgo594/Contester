class LobUser < ApplicationRecord
  belongs_to :user
  belongs_to :lobby
end
