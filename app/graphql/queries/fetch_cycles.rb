module Queries
    class FetchCycles < Queries::BaseQuery
        type [Types::CycleType], null: false

        def resolve
            Bill.all.order(date: :desc)
        end
    end
end