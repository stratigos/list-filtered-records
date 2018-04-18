defmodule RealDesignersWeb.DesignerControllerTest do
  use RealDesignersWeb.ConnCase

  alias RealDesigners.Repo
  alias RealDesigners.Designers.Designer
  alias RealDesigners.Assets.Image

  # Replace the following with proper fixtures or a factory library, i.e.,
  # ExMachina. If persistent records are used, ensure `async: true` is
  # removed above.
  @image_a %Image{url: "http://example.com/456"}
  @image_b %Image{url: "http://example.com/789"}
  @designer_a %Designer{name: "Test Designer A", favotire: false, image: @image_a}
  @designer_b %Designer{name: "Test Designer B", favotire: false, image: @image_b}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all designers", %{conn: conn} do
      [designer_a, designer_b] = Enum.map([@designer_a, @designer_b], &Repo.insert!(&1))

      # Replace with `Poison.encode!(designer)` once encode mapping is set.
      expected_designers = [
        %{"id" => designer_a.id,
          "name" => designer_a.name,
          "favotire" => designer_a.favotire,
          "image_url" => designer_a.image.url},
        %{"id" => designer_b.id,
          "name" => designer_b.name,
          "favotire" => designer_b.favotire,
          "image_url" => designer_b.image.url}
      ]

      conn = get conn, designer_path(conn, :index)
      assert json_response(conn, 200)["data"] == expected_designers
    end
  end

end
