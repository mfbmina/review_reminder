class Repository < ApplicationRecord
  belongs_to :user

  validates :github_id, uniqueness: true
end
