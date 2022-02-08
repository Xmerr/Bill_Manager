module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_cycles, [Types::CycleType], null: false, description: "Returns the cycles", resolver: Queries::FetchCycles
    # def fetch_cycles
    #   Bill.all
    # end
  end
end
