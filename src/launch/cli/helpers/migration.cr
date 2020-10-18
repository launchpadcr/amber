module Launch::CLI::Helpers::Migration
  private def create_table_field(field : Field)
    "t.#{field.db_type} :#{field.name}"
  end

  private def create_table_fields
    @fields.map { |field| create_table_field(field) }.join("\n      ")
  end
end
