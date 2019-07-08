class AddNameToLobbies < ActiveRecord::Migration[5.2]
  def change
    add_column :lobbies, :name, :string
  end
end
