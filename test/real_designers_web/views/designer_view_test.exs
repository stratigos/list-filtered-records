defmodule RealDesignersWeb.DesignerViewTest do
  use RealDesignersWeb.ConnCase, async: true

  alias RealDesigners.Designers.Designer
  alias RealDesigners.Assets.Image

  # Replace the following with proper fixtures or a factory library, i.e.,
  # ExMachina. If persistent records are used, ensure `async: true` is
  # removed above.
  @image %Image{url: "http://example.com/456"}
  @designer_with_image %Designer{name: "Test Designer", favotire: false, image: @image}

  test "index.json" do
    rendered_designers = RealDesignersWeb.DesignerView.render("index.json", %{designers: [@designer_with_image]})

    expected_designers = %{data: [
      %{
        favotire: false,
        id: nil,
        image_url: "http://example.com/456",
        name: "Test Designer"
      }
    ]}

    assert rendered_designers == expected_designers
  end

  test "designer_with_image_url.json" do
    rendered_designer = RealDesignersWeb.DesignerView.render(
      "designer_with_image_url.json",
      %{designer: @designer_with_image})

    expected_designer = %{
      favotire: false,
      id: nil,
      image_url: "http://example.com/456",
      name: "Test Designer"
    }

    assert rendered_designer == expected_designer
  end
end
