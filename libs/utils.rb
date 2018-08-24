class Utils
  require 'base64'
  require 'digest/md5'
  require 'digest'

  #check locale valid
  def self.checkLocaleValid(locale)
    if locale and locale.to_s.strip != ""
      ARR_LOCALES.each do |lc|
        if lc[:locale].to_s.strip == locale.to_s.strip
          return 1
        end
      end
    end
    return 0
  end

end