defmodule RealDesigners.Designers.Designer do
  use Ecto.Schema
  import Ecto.Changeset

  schema "designers" do
    has_one :image, RealDesigners.Assets.Image

    field :favotire, :boolean, default: false
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(designer, attrs) do
    designer
    |> cast(attrs, [:name, :favotire])
    |> validate_required([:name, :favotire])
  end
end
