defmodule RealDesignersWeb.PageController do
  use RealDesignersWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
