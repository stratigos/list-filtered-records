defmodule RealDesignersWeb.DesignerView do
  use RealDesignersWeb, :view
  alias RealDesignersWeb.DesignerView

  def render("index.json", %{designers: designers}) do
    %{data: render_many(designers, DesignerView, "designer.json")}
  end

  def render("show.json", %{designer: designer}) do
    %{data: render_one(designer, DesignerView, "designer.json")}
  end

  def render("designer.json", %{designer: designer}) do
    %{id: designer.id,
      name: designer.name,
      favotire: designer.favotire}
  end
end
