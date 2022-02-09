class CreateLineItems < ActiveRecord::Migration[6.0]
  def change
    create_table :line_items do |t|
      t.string :name
      t.integer :amount
      t.boolean :is_expense
      t.references :bill_cycle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
