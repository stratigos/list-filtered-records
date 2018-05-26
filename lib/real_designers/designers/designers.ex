defmodule RealDesigners.Designers do
  @moduledoc """
  The Designers context.
  """

  import Ecto.Query, warn: false
  alias RealDesigners.Repo

  alias RealDesigners.Designers.Designer

  @doc """
  Returns the list of designers.

  ## Examples

      iex> list_designers()
      [%Designer{}, ...]

  """
  def list_designers do
    Repo.all(Designer)
  end

  @doc """
  Returns the list of Designer records, with their image url preloaded, sorted
  alpha-numerically.

  ## Examples

      iex> list_designers_with_images()
      [%Designer{}, ...]

  """
  def list_designers_with_images do
    Designer
      |> preload(:image)
      |> select([:id, :name, :favotire, image: [:url]])
      |> order_by(:name)
      |> Repo.all
  end

  @doc """
  Gets a single designer.

  Raises `Ecto.NoResultsError` if the Designer does not exist.

  ## Examples

      iex> get_designer!(123)
      %Designer{}

      iex> get_designer!(456)
      ** (Ecto.NoResultsError)

  """
  def get_designer!(id), do: Repo.get!(Designer, id)

  @doc """
  Documenting the obvious is silly, and prone to rot. This is the last of these
  comments, and soon theyll all be deleted. Thank you.
  """
  def get_designer_with_image!(id) do
    Designer
      |> preload(:image)
      |> select([:id, :name, :favotire, image: [:url]])
      |> Repo.get!(id)
  end

  @doc """
  Creates a designer.

  ## Examples

      iex> create_designer(%{field: value})
      {:ok, %Designer{}}

      iex> create_designer(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_designer(attrs \\ %{}) do
    %Designer{}
    |> Designer.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a designer.

  ## Examples

      iex> update_designer(designer, %{field: new_value})
      {:ok, %Designer{}}

      iex> update_designer(designer, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_designer(%Designer{} = designer, attrs) do
    designer
    |> Designer.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Designer.

  ## Examples

      iex> delete_designer(designer)
      {:ok, %Designer{}}

      iex> delete_designer(designer)
      {:error, %Ecto.Changeset{}}

  """
  def delete_designer(%Designer{} = designer) do
    Repo.delete(designer)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking designer changes.

  ## Examples

      iex> change_designer(designer)
      %Ecto.Changeset{source: %Designer{}}

  """
  def change_designer(%Designer{} = designer) do
    Designer.changeset(designer, %{})
  end
end
