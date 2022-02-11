module Mutations
  class DeleteBillingCycle < BaseMutation
    field :bill_cycle, Types::BillCycleType, null: false

    argument :id, Integer, required: true do
      description "ID of the bill cycle to delete"
    end

    def resolve(id:)
      bill_cycle = BillCycle.find(id);

      bill_cycle.line_items.each {
        |line_item| line_item.destroy;
      }
      
      if(bill_cycle.destroy) 
        {
          bill_cycle: bill_cycle,
          errors: []
        } else {
          bill_cycle: nil,
          errors: bill_cycle.errors.full_message
        }
      end
    end
  end
end
