defmodule RealDesigners.Assets.Image do
  use Ecto.Schema
  import Ecto.Changeset

  schema "images" do
    belongs_to :designer, RealDesigners.Designers.Designer

    field :url, :string

    timestamps()
  end

  @doc false
  def changeset(image, attrs) do
    image
    |> cast(attrs, [:url])
    |> validate_required([:url])
  end
end
