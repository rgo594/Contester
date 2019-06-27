class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :description
      t.string :answer
      t.string :a
      t.string :b
      t.string :c
      t.string :d
      t.belongs_to :quiz, foreign_key: true

      t.timestamps
    end
  end
end
