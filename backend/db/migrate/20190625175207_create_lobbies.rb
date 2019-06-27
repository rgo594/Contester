class CreateLobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :lobbies do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :quiz, foreign_key: true

      t.timestamps
    end
  end
end
