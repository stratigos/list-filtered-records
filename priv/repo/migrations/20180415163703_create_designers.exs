defmodule RealDesigners.Repo.Migrations.CreateDesigners do
  use Ecto.Migration

  def change do
    create table(:designers) do
      add :name, :string
      add :favotire, :boolean, default: false, null: false

      timestamps()
    end

  end
end
