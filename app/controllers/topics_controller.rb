class TopicsController < ApplicationController

  def index
    @topics = Topic.all
    @images = Image.all
  end

  def new
    @topic = Topic.new
  end

  def create
    @topic = Topic.new(topic_params)
    if @topic.save
      redirect_to root_path
    else
      redirect_to "/topics/new"
    end
  end

  def edit
    @topic = Topic.find(params[:id])
  end

  def update
    @topic = Topic.find(params[:id])
    if @topic.update(topic_params)
      redirect_to "/topics/#{@topic.id}/"
    else
      redirect_to "/topics/#{@topic.id}/"
    end
  end

  def show
    @topic = Topic.find(params[:id])
  end

  def destroy
    topic = Topic.find(params[:id])
    if topic.destroy
    redirect_to root_path
    else
    redirect_to root_path
    end
  end

  def profile
  end

  private
  def topic_params
    params.require(:topic).permit(:title, :content).merge(user_id: current_user.id)
  end

end
