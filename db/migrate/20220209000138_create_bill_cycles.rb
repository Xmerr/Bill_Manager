class CreateBillCycles < ActiveRecord::Migration[6.0]
  def change
    create_table :bill_cycles do |t|
      t.date :date
      t.integer :debt_begin
      t.integer :debt_end
      t.integer :savings_begin
      t.integer :savings_end

      t.timestamps
    end
  end
end
