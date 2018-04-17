defmodule RealDesigners.Repo.Migrations.CreateImages do
  use Ecto.Migration

  def change do
    create table(:images) do
      add :url, :string
      add :designer_id, references(:designers, on_delete: :nothing)

      timestamps()
    end

    create index(:images, [:designer_id])
  end
end
