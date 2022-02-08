module Queries
    class FetchCycle < Queries::BaseQuery
        type Types::CycleType, null: false
        argument :id, ID, required: true

        def resolve(id:)
            Bill.find(id)
        rescue ActiveRecord::RecordNotFound => _e
            GraphQL::ExecutionError.new('Bill Cycle Does Not Exist.')
        rescue ActiveRecord::RecordInvalid => e
            GraphQL::ExecutionError.new("Invalid Attribute for #{e.record.class}:"\
            " #{e.record.errors.full_message.join(', ')}")
        end
    end
end