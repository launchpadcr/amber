# This file loads all the .yml files in config/environments for ecr processing.

# Iterate through files generating a string that will be turned into code.
# Adds the output of `ECR.render` to `@environment_files`
def build_ecr_rendering_code
  dir = "#{Dir.current}/#{ARGV[0]}"
  files = Dir.children(dir) # .filter where extension != .yml

  str = ""
  files.each do |file|
    str += "environment_files[\"#{file.split(".")[0]}\"] = ECR.render \"#{dir}/#{file}\"\n"
  end
  str
end

puts build_ecr_rendering_code
