defmodule RealDesignersWeb.DesignerController do
  use RealDesignersWeb, :controller

  alias RealDesigners.Designers
  alias RealDesigners.Designers.Designer

  action_fallback RealDesignersWeb.FallbackController

  def index(conn, _params) do
    designers = Designers.list_designers_with_images()
    render(conn, "index.json", designers: designers)
  end

  def fav(conn, %{"designer_id" => designer_id}) do
    designer = Designers.get_designer_with_image!(designer_id)

    with {:ok, %Designer{} = designer} <-
      Designers.update_designer(designer, %{favotire: !designer.favotire})
    do
      render(conn, "fav.json", designer: designer)
    end
  end

end
