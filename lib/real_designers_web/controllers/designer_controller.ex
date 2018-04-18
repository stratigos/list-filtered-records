defmodule RealDesignersWeb.DesignerController do
  use RealDesignersWeb, :controller

  alias RealDesigners.Designers
  alias RealDesigners.Designers.Designer

  action_fallback RealDesignersWeb.FallbackController

  def index(conn, _params) do
    designers = Designers.list_designers_with_images()
    render(conn, "index.json", designers: designers)
  end

end
