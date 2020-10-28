require "kilt"
require "kilt/ecr"

module Launch::Environment
  class Loader
    property environment_files = Hash(String, String).new

    def initialize(@environment : Launch::Environment::EnvType = Launch.env.to_s,
                   @path : String = Launch.environment_path)
      raise Exceptions::Environment.new(@path, @environment) unless settings_file_exist?
    end

    def settings
      {{ run("./file_loader.cr", "config/environments").id }}
      Settings.from_yaml(@environment_files[Launch.env.to_s])
    end

    def credentials
      YAML.parse(Support::FileEncryptor.read_as_string(credentials_settings_file))
    rescue e : Exception
      puts e
      # TODO
      raise "No credentials.yml.enc file"
    end

    private def settings_content
      if File.exists?(yml_settings_file)
        File.read(yml_settings_file)
      end
    end

    private def yml_settings_file
      @yml_settings ||= File.expand_path("#{@path}/#{@environment}.yml")
    end

    private def credentials_settings_file
      @credentials ||= File.expand_path("./config/credentials.yml.enc")
    end

    private def settings_file_exist?
      File.exists?(yml_settings_file)
    end

    private macro render_environment(filename)
      String.build do |__kilt_io__|
        {% if Kilt::ENGINES["ecr"] %}
          {{Kilt::ENGINES["ecr"]}}("{{filename.id}}", "__kilt_io__")
        {% else %}
          raise Kilt::Exception.new("Unsupported template engine for extension: \"" + {{ext}} + "\"")
        {% end %}
      end
    end
  end
end
