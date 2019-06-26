class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :avatar
      t.string :exam
      t.string :test_date

      t.timestamps
    end
  end
end
