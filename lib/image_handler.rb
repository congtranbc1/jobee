require 'RMagick'
# require 'base64'

class ImageHandler

  attr_accessor :image

  #image = the image passed from params[:image]
  def initialize(image = nil)
    @image = (Magick::Image.from_blob(image.read)).first if image
  end

  #cols = the width of image
  #rows = the height of image
  def resize(p_cols, p_rows)
    #read the image from the string
    #@image = Magick::Image.from_blob(p_image.read)

    #change the geometry of the image to suit our predefined size
    @image = @image.change_geometry!("#{p_cols}x#{p_rows}") { |cols, rows, img|
       #if the cols or rows are smaller then our predefined sizes we build a white background and center the image in it
     # if cols < p_cols || rows < p_rows
      # #resize our image
      # img.resize!(cols, rows)
      # #build the white background
      # bg = Magick::Image.new(p_cols, p_rows){self.background_color = "white"}
      # #center the image on our new white background
      # bg.composite(img, Magick::CenterGravity, Magick::OverCompositeOp)
 
     # else
        # #in the unlikely event that the new geometry cols and rows match our predefined size we will not set a white bg
        # img.resize!(cols, rows)
     # end
     img.resize!(cols, rows)
    }
    #@image.write '/home/thuc/RubymineProjects/smartweb/public/images/upload_img/' + 'test.jpg'
    @image
  end

  # write jpg file
  def write(path)
    @image.write(path);
  end

  def convert_to_txt(path, format = nil)
  	convert_img = @image
    if format
      convert_img.format = format
    else
      convert_img.format = 'jpg'
    end

    convert_img = convert_img.to_blob
    File.open(path, 'w') { |f| f.write(Base64.strict_encode64(convert_img)) }
  end

  def self.convert_from_txt(path, format = nil)
    if format
      ext = format
    else
      ext = '.jpg'
    end

    fi = File.open(path, 'r')
    content = fi.read
    img = Magick::Image.read_inline(content)
		img.first

    # img_path = path.gsub('.txt', ext)
    # img.first.write(img_path)
    # img.first.to_blob
  end

  # read image from file
  # return BLOB type
  def self.read(path)
    Magick::Image.read(path).first.to_blob
  end
  
  # read image from file
  # return BLOB type
  def to_blob
    @image.to_blob
  end
end