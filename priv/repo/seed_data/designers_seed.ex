defmodule RealDesigners.SeedData.DesignerSeed do

  alias RealDesigners.Designers.Designer
  alias RealDesigners.Repo

  def insert_seed_designers do
    Enum.each(list_seed_designers(), fn(designer) -> Repo.insert!(designer) end)
  end

  defp list_seed_designers do
    [
      %Designer{name: "Mykita + Maison Martin Margiela"},
      %Designer{name: "Streetzie's"},
      %Designer{name: "99% Is"},
      %Designer{name: "Constança Basto"},
      %Designer{name: "Angélique de Paris"},
      %Designer{name: "Acne Studios Blå Konst"},
      %Designer{name: "Dirk Schönberger"},
      %Designer{name: "Y-3 SPORT"},
      %Designer{name: "M.i.H Jeans"},
      %Designer{name: "Mühle-Glashütte"}
    ]
  end

end
