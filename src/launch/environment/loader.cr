require "ecr/macros"

module Launch::Environment
  class Loader
    def credentials : YAML::Any
      YAML.parse(Support::FileEncryptor.read_as_string(credentials_settings_file))
    rescue e : Exception
      puts e
      # TODO
      raise "No credentials.yml.enc file"
    end

    private def credentials_settings_file : String
      @credentials ||= File.expand_path("./config/credentials.yml.enc")
    end
  end
end
