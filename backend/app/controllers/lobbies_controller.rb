class LobbiesController < ApplicationController

  def create
    lobby = Lobby.new(lobby_params)
      if lobby.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          LobbySerializer.new(lobby)
            ).serializable_hash
      ActionCable.server.broadcast 'feed_channel', serialized_data
      head :ok
    end
  end

  private

  def lobby_params
    params.require(:lobby).permit(:name)
  end
end
