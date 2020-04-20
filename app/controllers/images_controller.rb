class ImagesController < ApplicationController

  def index
    @images = Image.all
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      redirect_to root_path
    else
      redirect_to "/images/new"
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  def destroy
    image = Image.find(params[:id])
    if image.destroy
    redirect_to images_path
    else
    redirect_to root_path
    end
  end

  private
  def image_params
    params.require(:image).permit(:image).merge(user_id: current_user.id)
  end

end
