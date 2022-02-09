class RemoveIsExpenseFromLineItems < ActiveRecord::Migration[6.0]
  def change
    remove_column :line_items, :is_expense, :boolean
  end
end
