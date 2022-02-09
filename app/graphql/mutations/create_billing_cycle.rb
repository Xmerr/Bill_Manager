module Mutations
  class CreateBillingCycle < BaseMutation
    field :bill_cycle, Types::BillCycleType, null: false

    argument :debt_begin, Integer, required: true do
      description "Short term debt before the bills were done (in pennies)"
    end

    argument :debt_end, Integer, required: true do
      description "Short term debt after the bills were done (in pennies)"
    end

    argument :savings_begin, Integer, required: true do
      description "Savings before the bills were done (in pennies)"
    end

    argument :savings_end, Integer, required: true do
      description "Savings after the bills were done (in pennies)"
    end

    def resolve(debt_begin:, debt_end:, savings_begin:, savings_end:)
      bill_cycle = BillCycle.new(date: Time.now.strftime("%Y-%m-%d"), debt_begin: debt_begin, debt_end: debt_end, savings_begin: savings_begin, savings_end: savings_end)
      
      if(bill_cycle.save) 
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
