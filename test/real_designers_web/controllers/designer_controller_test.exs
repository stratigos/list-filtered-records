defmodule RealDesignersWeb.DesignerControllerTest do
  use RealDesignersWeb.ConnCase

  alias RealDesigners.Designers
  alias RealDesigners.Designers.Designer

  @create_attrs %{favotire: true, name: "some name"}
  @update_attrs %{favotire: false, name: "some updated name"}
  @invalid_attrs %{favotire: nil, name: nil}

  def fixture(:designer) do
    {:ok, designer} = Designers.create_designer(@create_attrs)
    designer
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all designers", %{conn: conn} do
      conn = get conn, designer_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create designer" do
    test "renders designer when data is valid", %{conn: conn} do
      conn = post conn, designer_path(conn, :create), designer: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, designer_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "favotire" => true,
        "name" => "some name"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, designer_path(conn, :create), designer: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update designer" do
    setup [:create_designer]

    test "renders designer when data is valid", %{conn: conn, designer: %Designer{id: id} = designer} do
      conn = put conn, designer_path(conn, :update, designer), designer: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, designer_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "favotire" => false,
        "name" => "some updated name"}
    end

    test "renders errors when data is invalid", %{conn: conn, designer: designer} do
      conn = put conn, designer_path(conn, :update, designer), designer: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete designer" do
    setup [:create_designer]

    test "deletes chosen designer", %{conn: conn, designer: designer} do
      conn = delete conn, designer_path(conn, :delete, designer)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, designer_path(conn, :show, designer)
      end
    end
  end

  defp create_designer(_) do
    designer = fixture(:designer)
    {:ok, designer: designer}
  end
end
