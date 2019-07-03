class FeedChannel < ApplicationCable::Channel
  def subscribed
    puts "SUBSCRIBED! " * 3
    stream_from "feed_channel"
  end

  def unsubscribed
    puts "UNSUBSCRIBED! " * 3 
    # Any cleanup needed when channel is unsubscribed
  end
end
