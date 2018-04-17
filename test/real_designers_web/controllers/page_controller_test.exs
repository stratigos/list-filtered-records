defmodule RealDesignersWeb.PageControllerTest do
  use RealDesignersWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "real-designers-react-app"
  end
end
