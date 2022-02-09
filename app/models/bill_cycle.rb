class BillCycle < ApplicationRecord
    has_many :line_items
end
