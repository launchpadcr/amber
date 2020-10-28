require "kilt"
require "kilt/ecr"

module Launch::Environment
  class Loader
    def initialize(
      @environment : Launch::Environment::EnvType = Launch.env.to_s,
      @path : String = Launch.environment_path
    )
    end

    def settings
      environment_files = Hash(String, String).new
      {{ run("./file_loader.cr", "config/environments").id }}
      Settings.from_yaml(@environment_files[@environment])
    rescue e : Exception
      raise Exceptions::Environment.new(@path, @environment)
    end

    def credentials
      YAML.parse(Support::FileEncryptor.read_as_string(credentials_settings_file))
    rescue e : Exception
      puts e
      # TODO
      raise "No credentials.yml.enc file"
    end

    private def credentials_settings_file
      @credentials ||= File.expand_path("./config/credentials.yml.enc")
    end

    private macro render_environment(filename)
      String.build do |__kilt_io__|
        {{Kilt::ENGINES["ecr"]}}("{{filename.id}}", "__kilt_io__")
      end
    end
  end
end
