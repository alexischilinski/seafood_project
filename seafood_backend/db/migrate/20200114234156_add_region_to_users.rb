class AddRegionToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :region, null: false, foreign_key: true
  end
end
