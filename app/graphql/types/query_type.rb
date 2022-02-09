module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # field :fetch_cycles, description: "Returns all the billing cycles orderd by date", resolver: Queries::FetchCycles
    # field :fetch_cycle, description: "Returns the details of a single billing cycle", resolver: Queries::FetchCycle

    field :cycles, resolver: Queries::FetchCycles do
      description "Returns all the billing cycles orderd by date"
    end

    field :cycle, resolver: Queries::FetchCycle do
      description "Returns an individual billing cycle of the passed in ID"
    end
  end
end
