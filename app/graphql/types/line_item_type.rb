module Types
  class LineItemType < Types::BaseObject
    field :id, ID, null: false

    field :name, String, null: false do
      description "Descriptive name for this item"
    end

    field :amount, Integer, null: false do
      description "Amount (in pennies) that this line item affected. Negative is expense while positive is income."
    end

    field :billCycle, BillCycleType, null: false do
      description "Billing cycle this line item is associated with"
    end
  end
end
