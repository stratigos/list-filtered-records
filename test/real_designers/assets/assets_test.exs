defmodule RealDesigners.AssetsTest do
  use RealDesigners.DataCase

  alias RealDesigners.Assets

  describe "images" do
    alias RealDesigners.Assets.Image

    @valid_attrs %{url: "https://www.example.com/someimagepath"}
    @update_attrs %{url: "https://www.example.com/someupdatedimagepath"}
    @invalid_attrs %{url: nil}

    def image_fixture(attrs \\ %{}) do
      {:ok, image} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Assets.create_image()

      image
    end

    test "list_images/0 returns all images" do
      image = image_fixture()
      assert Assets.list_images() == [image]
    end

    test "get_image!/1 returns the image with given id" do
      image = image_fixture()
      assert Assets.get_image!(image.id) == image
    end

    test "create_image/1 with valid data creates a image" do
      assert {:ok, %Image{} = image} = Assets.create_image(@valid_attrs)
      assert image.url == "https://www.example.com/someimagepath"
    end

    test "create_image/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Assets.create_image(@invalid_attrs)
    end

    test "update_image/2 with valid data updates the image" do
      image = image_fixture()
      assert {:ok, image} = Assets.update_image(image, @update_attrs)
      assert %Image{} = image
      assert image.url == "https://www.example.com/someupdatedimagepath"
    end

    test "update_image/2 with invalid data returns error changeset" do
      image = image_fixture()
      assert {:error, %Ecto.Changeset{}} = Assets.update_image(image, @invalid_attrs)
      assert image == Assets.get_image!(image.id)
    end

    test "delete_image/1 deletes the image" do
      image = image_fixture()
      assert {:ok, %Image{}} = Assets.delete_image(image)
      assert_raise Ecto.NoResultsError, fn -> Assets.get_image!(image.id) end
    end

    test "change_image/1 returns a image changeset" do
      image = image_fixture()
      assert %Ecto.Changeset{} = Assets.change_image(image)
    end
  end
end
