module Types
  module Input
    class CycleInputType < Types::BaseInputObject
      argument :date, Date, required: true
      argument :savings, Integer, required: true
      argument :debt, Integer, required: true
    end
  end
end