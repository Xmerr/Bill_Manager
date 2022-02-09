module Queries
    class FetchCycle < Queries::BaseQuery
        type Types::BillCycleType, null: false

        argument :id, ID, required: true do
            description "The id of the cycle you want to view more detail about"
        end

        def resolve(id:)
            BillCycle.find(id)
        rescue ActiveRecord::RecordNotFound => _e
            GraphQL::ExecutionError.new('Bill Cycle Does Not Exist.')
        rescue ActiveRecord::RecordInvalid => e
            GraphQL::ExecutionError.new("Invalid Attribute for #{e.record.class}:"\
            " #{e.record.errors.full_message.join(', ')}")
        end
    end
end