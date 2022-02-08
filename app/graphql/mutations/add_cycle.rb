module Mutations
    class AddCycle < Mutations::BaseMutation
        argument :params, Types::CycleInputType, required: true

        field :cycle, Types::CycleType, null: false

        def resolve(params:)
            cycle_params = Hash params
            
            begin
                cycle = Bill.create!(cycle_params)

                { cycle: cycle }
            rescue ActiveRecord::RecordInvalid => e
                GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
                " #{e.record.errors.full_message.join(', ')}")
            end
        end
    end
end