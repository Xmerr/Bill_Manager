module Types
  class MutationType < Types::BaseObject
    field :add_cycle, description: "Adds a new billing cycle to the database", mutation: Mutations::AddCycle
    field :remove_cycle, description: "Deletes a billing cycle record from the database", mutation: Mutations::RemoveCycle
  end
end
