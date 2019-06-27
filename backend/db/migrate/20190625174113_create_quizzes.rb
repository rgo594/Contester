class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :name
      t.string :subject
      t.string :questList

      t.timestamps
    end
  end
end
