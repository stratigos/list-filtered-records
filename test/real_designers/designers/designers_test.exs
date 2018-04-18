defmodule RealDesigners.DesignersTest do
  use RealDesigners.DataCase

  alias RealDesigners.Designers

  describe "designers" do
    alias RealDesigners.Designers.Designer
    alias RealDesigners.Assets.Image

    @valid_attrs %{favotire: true, name: "some name"}
    @update_attrs %{favotire: false, name: "some updated name"}
    @invalid_attrs %{favotire: nil, name: nil}

    def designer_fixture(attrs \\ %{}) do
      {:ok, designer} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Designers.create_designer()

      designer
    end

    def designers_with_image_fixture() do
      designer = designer_fixture()

      %Image{url: "http://example.com", designer: designer}
        |> Repo.insert!

      Designer
        |> preload(:image)
        |> select([:id, :name, :favotire, image: [:url]])
        |> order_by(:name)
        |> Repo.all
    end

    test "list_designers/0 returns all designers" do
      designer = designer_fixture()
      assert Designers.list_designers() == [designer]
    end

    test "list_designers_with_images/0 returns all designers with images" do
      designers = designers_with_image_fixture()

      assert Designers.list_designers_with_images() == designers
    end

    test "get_designer!/1 returns the designer with given id" do
      designer = designer_fixture()
      assert Designers.get_designer!(designer.id) == designer
    end

    test "create_designer/1 with valid data creates a designer" do
      assert {:ok, %Designer{} = designer} = Designers.create_designer(@valid_attrs)
      assert designer.favotire == true
      assert designer.name == "some name"
    end

    test "create_designer/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Designers.create_designer(@invalid_attrs)
    end

    test "update_designer/2 with valid data updates the designer" do
      designer = designer_fixture()
      assert {:ok, designer} = Designers.update_designer(designer, @update_attrs)
      assert %Designer{} = designer
      assert designer.favotire == false
      assert designer.name == "some updated name"
    end

    test "update_designer/2 with invalid data returns error changeset" do
      designer = designer_fixture()
      assert {:error, %Ecto.Changeset{}} = Designers.update_designer(designer, @invalid_attrs)
      assert designer == Designers.get_designer!(designer.id)
    end

    test "delete_designer/1 deletes the designer" do
      designer = designer_fixture()
      assert {:ok, %Designer{}} = Designers.delete_designer(designer)
      assert_raise Ecto.NoResultsError, fn -> Designers.get_designer!(designer.id) end
    end

    test "change_designer/1 returns a designer changeset" do
      designer = designer_fixture()
      assert %Ecto.Changeset{} = Designers.change_designer(designer)
    end
  end
end
