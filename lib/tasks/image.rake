namespace :minifier do

  desc "image"
  task :image => [:jpegtran, :pngcrush]

  desc "jpegtran"
  task :jpegtran do
    FileList['public/images/**/*.jpg'].each do |file|
      cmd = "jpegtran -copy none -optimize -perfect -outfile #{file} #{file}"
      puts cmd
      ret = system(cmd)
      raise "Minification jpg for #{file}" if !ret
    end
  end
  
  desc "pngcrush"
  task :pngcrush do
    FileList['public/images/**/*.png'].each do |file|
      cmd = "pngcrush -rem alla -reduce -brute #{file} #{file}.png-crushed.png && mv #{file}.png-crushed.png #{file}"
      puts cmd
      ret = system(cmd)
      raise "Minification pngcrush for #{file}" if !ret
    end
  end
end