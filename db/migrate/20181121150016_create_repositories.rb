class CreateRepositories < ActiveRecord::Migration[5.2]
  def change
    create_table :repositories do |t|
      t.references :user, foreign_key: true
      t.integer :github_id
      t.string :github_owner_username
      t.integer :github_owner_id
      t.string :full_name
      t.boolean :enabled, default: false
      t.jsonb :slack_data, index: true

      t.timestamps
    end
  end
end
