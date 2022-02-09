module Types
  class MutationType < Types::BaseObject
    field :delete_billing_cycle, mutation: Mutations::DeleteBillingCycle
    field :delete_line_item, mutation: Mutations::DeleteLineItem
    field :create_billing_cycle, mutation: Mutations::CreateBillingCycle
    field :create_line_item, mutation: Mutations::CreateLineItem
  end
end
