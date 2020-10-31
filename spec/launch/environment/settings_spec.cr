require "../../spec_helper"

module Launch::Environment
  describe Settings do
    Dir.cd CURRENT_DIR

    pending "loads logging color setting from yaml file"
    # it "loads logging color setting from yaml file" do
    #   color_yaml = File.read(File.expand_path("./spec/support/config/test_with_color.yml"))
    #   settings = Launch::Settings.from_yaml(color_yaml)
    #   settings.logging.color.should eq :red
    # end
  end
end
