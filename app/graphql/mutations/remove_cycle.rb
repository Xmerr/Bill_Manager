module Mutations
    class RemoveCycle < Mutations::BaseMutation
        argument :id, ID, required: true

        field :cycle, Types::CycleType, null: false

        def resolve(id:)
            begin
                cycle = Bill.find(id)
                cycle.destroy

                { cycle: cycle }
            rescue ActiveRecord::RecordNotFound => _e
                GraphQL::ExecutionError.new("Record Not Found")
            rescue ActiveRecord::RecordInvalid => e
                GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
                " #{e.record.errors.full_message.join(', ')}")
            end
        end
    end
end