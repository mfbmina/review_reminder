class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :github_id
      t.string :github_token
      t.string :provider

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :github_id
    add_index :users, :github_token
    add_index :users, :provider
  end
end
