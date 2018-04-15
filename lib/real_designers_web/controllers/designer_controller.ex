defmodule RealDesignersWeb.DesignerController do
  use RealDesignersWeb, :controller

  alias RealDesigners.Designers
  alias RealDesigners.Designers.Designer

  action_fallback RealDesignersWeb.FallbackController

  def index(conn, _params) do
    designers = Designers.list_designers()
    render(conn, "index.json", designers: designers)
  end

  def create(conn, %{"designer" => designer_params}) do
    with {:ok, %Designer{} = designer} <- Designers.create_designer(designer_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", designer_path(conn, :show, designer))
      |> render("show.json", designer: designer)
    end
  end

  def show(conn, %{"id" => id}) do
    designer = Designers.get_designer!(id)
    render(conn, "show.json", designer: designer)
  end

  def update(conn, %{"id" => id, "designer" => designer_params}) do
    designer = Designers.get_designer!(id)

    with {:ok, %Designer{} = designer} <- Designers.update_designer(designer, designer_params) do
      render(conn, "show.json", designer: designer)
    end
  end

  def delete(conn, %{"id" => id}) do
    designer = Designers.get_designer!(id)
    with {:ok, %Designer{}} <- Designers.delete_designer(designer) do
      send_resp(conn, :no_content, "")
    end
  end
end
