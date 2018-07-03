namespace :minifier do

  def compresshtml(files)
    files.each do |file|
      cmd = "java -jar lib/htmlcompressor-1.5.2.jar --compress-js --js-compressor closure --compress-css --preserve-server-script --remove-intertag-spaces #{file} -o #{file}"
      puts cmd
      ret = system(cmd)
      raise "Compress failed for #{file}" if !ret
    end
  end
  
  def compress_js(files)
    files.each do |file|
      cmd = "java -jar lib/htmlcompressor-1.5.2.jar --js --js-compressor closure --preserve-server-script #{file} -o #{file}"
      puts cmd
      ret = system(cmd)
      raise "Compress failed for #{file}" if !ret
    end
  end

  desc "compresshtml"
  task :compresshtml => [:compress_html_erb, :compress_js_erb]

  desc "compress html erb"
  task :compress_html_erb do
    compresshtml(FileList['app/views/**/*.html.erb'])
  end
  
  desc "compress js erb"
  task :compress_js_erb do
    # compress_js(FileList['app/views/smart_days/*js.erb'])
  end
end