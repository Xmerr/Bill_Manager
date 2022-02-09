module Types
  class BillCycleType < Types::BaseObject
    field :id, ID, null: false

    field :date, String, null: false do
      description "Date that bills were done"
    end

    field :debt_begin, Integer, null: false do
      description "Short term debt before the bills were done (in pennies)"
    end

    field :debt_end, Integer, null: false do
      description "Short term debt after the bills were done (in pennies)"
    end

    field :savings_begin, Integer, null: false do
      description "Savings before the bills were done (in pennies)"
    end

    field :savings_end, Integer, null: false do
      description "Savings after the bills were done (in pennies)"
    end

    field :line_items, [LineItemType], null: false do
      description "Line items which were marked as income or expenses for this billing cycle"
    end
  end
end
