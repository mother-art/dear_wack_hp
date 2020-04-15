class TopicsController < ApplicationController

  def index
    @topics = Topic.all
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

  def show
    @topic = Topic.find(params[:id])
  end

  def profile
  end

  private
  def topic_params
    params.require(:topic).permit(:title, :content).merge(user_id: current_user.id)
  end

end
