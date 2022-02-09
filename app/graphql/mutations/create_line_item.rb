module Mutations
  class CreateLineItem < BaseMutation
    field :line_item, Types::LineItemType, null: false

    argument :name, String, required: true do
      description "The name of the line item to be created"
    end

    argument :amount, Integer, required: true do
      description "Amount (in pennies) that this line item affected. Negative is expense while positive is income."
    end

    argument :cycleId, Integer, required: true do
      description "Billing cycle ID this line item is associated with"
    end

    def resolve(name:, amount:, cycle_id:)
      line_item = LineItem.new(name: name, amount: amount, bill_cycle_id: cycle_id)
      
      if(line_item.save) 
        {
          line_item: line_item,
          errors: []
        } else {
          line_item: nil,
          errors: line_item.errors.full_message
        }
      end
    end
  end
end
