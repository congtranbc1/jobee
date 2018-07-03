namespace :admin do

  def downcase(files)
    files.each do |file|
      # lower case
      # rename 'y/A-Z/a-z/' *
      # drop whitespace
      # rename 's/ //g' *
      name = File.basename(file)
      name = name.strip.downcase
      dirname = File.dirname(file)
      new_name = dirname + '/' + name
      cmd = "mv '#{file}' '#{new_name}'"
      puts cmd
      ret = system(cmd)
      raise "Downcase failed for #{file}" if !ret
    end
  end

  desc "down case"
  task :downcase => [:downcase_photo_dolder]

  desc "down case photo folder"
  task :downcase_photo_dolder do
    downcase(FileList['/home/thuc/test1/*'])
  end

  desc "minify temp folder"
  task :downcase_temp_dolder do
    downcase(FileList['/home/thuc/test1/*'])
  end

  desc "minify voice folder"
  task :downcase_voice_dolder do
    downcase(FileList['/home/thuc/test1/*'])
  end
end