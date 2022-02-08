class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills do |t|
      t.date :date
      t.integer :savings
      t.integer :debt

      t.timestamps
    end
  end
end
