defmodule RealDesignersWeb.DesignerView do
  use RealDesignersWeb, :view
  alias RealDesignersWeb.DesignerView

  def render("index.json", %{designers: designers}) do
    %{data: render_many(designers, DesignerView, "designer_with_image_url.json")}
  end

  def render("fav.json", %{designer: designer}) do
    %{data: render_one(designer, DesignerView, "designer_with_image_url.json")}
  end

  def render("designer_with_image_url.json", %{designer: designer}) do
    %{id: designer.id,
      name: designer.name,
      favotire: designer.favotire,
      image_url: designer.image.url}
  end
end
