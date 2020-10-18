module Launch::CLI
  module MigrationSpecHelper
    def self.text_for(migration : Migration) : String
      migration_text = ""
      begin
        migration.render("./tmp")
        migration_filename = Dir.entries("./tmp/db/migrations").sort.last
        migration_text = File.read("./tmp/db/migrations/#{migration_filename}")
      ensure
        `rm -rf ./tmp/db`
      end
      migration_text
    end

    def self.sample_migration_for(migration_template_type)
      migration_template_type.new("post", ["user:ref", "title:string", "body:text"])
    end

    def self.sample_migration_create_table
      "class Post < Jennifer::Migration::Base\n" +
        "  def up\n" +
        "    create_table(:posts) do |t|\n" +
        "      t.integer :id\n" +
        "      t.reference :user\n" +
        "      t.string :title\n" +
        "      t.text :body\n" +
        "      t.timestamp :created_at\n" +
        "      t.timestamp :updated_at\n" +
        "    end\n" +
        "  end\n" +
        "\n" +
        "  def down\n" +
        "    drop_table(:posts)\n" +
        "  end\n" +
        "end"
    end

    def self.sample_migration_reference
      "t.reference :user"
    end
  end
end
