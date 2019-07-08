class CreateHighScores < ActiveRecord::Migration[5.2]
  def change
    create_table :high_scores do |t|
      t.string :quiz
      t.integer :score
      t.integer :times_taken
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
