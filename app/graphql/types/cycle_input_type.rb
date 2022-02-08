module Types
  class CycleInputType < Types::BaseInputObject
    argument :date, String, required: true
    argument :savings, Integer, required: true
    argument :debt, Integer, required: true
  end
end