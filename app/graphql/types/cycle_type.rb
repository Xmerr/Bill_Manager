module Types
  class CycleType < Types::BaseObject
    field :id, ID, null: false
    field :date, String, null: true
    field :savings, Integer, null: true
    field :debt, Integer, null: true
  end
end
