module Queries
    class FetchCycles < Queries::BaseQuery
        type [Types::BillCycleType], null: false 

        def resolve
            BillCycle.all.order(date: :desc)
        end
    end
end