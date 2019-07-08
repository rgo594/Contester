class HighScoreSerializer < ActiveModel::Serializer
   attributes :high_score, :quiz, :user_id, :score, :id
   belongs_to :user
end
