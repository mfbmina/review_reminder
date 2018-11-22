# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_21_150016) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "repositories", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "github_id"
    t.string "github_owner_username"
    t.integer "github_owner_id"
    t.string "full_name"
    t.boolean "enabled", default: false
    t.jsonb "slack_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slack_data"], name: "index_repositories_on_slack_data"
    t.index ["user_id"], name: "index_repositories_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "github_id"
    t.string "github_token"
    t.string "provider"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["github_id"], name: "index_users_on_github_id"
    t.index ["github_token"], name: "index_users_on_github_token"
    t.index ["provider"], name: "index_users_on_provider"
  end

  add_foreign_key "repositories", "users"
end
