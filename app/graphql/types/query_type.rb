module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_cycles, description: "Returns all the billing cycles orderd by date", resolver: Queries::FetchCycles

    field :fetch_cycle, description: "Returns the details of a single billing cycle", resolver: Queries::FetchCycle
  end
end
