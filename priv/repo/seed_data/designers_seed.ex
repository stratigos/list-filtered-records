defmodule RealDesigners.SeedData.DesignerSeed do

  alias RealDesigners.Designers.Designer
  alias RealDesigners.Assets.Image
  alias RealDesigners.Repo

  def insert_seed_designers do
    Enum.each(list_seed_designers(), fn(designer) -> Repo.insert!(designer) end)
  end

  defp list_seed_designers do
    [
      %Designer{
        name: "Mykita + Maison Martin Margiela",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Streetzie's",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "99% Is",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Constança Basto",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Angélique de Paris",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Acne Studios Blå Konst",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Dirk Schönberger",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Y-3 SPORT",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "M.i.H Jeans",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      },
      %Designer{
        name: "Mühle-Glashütte",
        image: %Image{url: "https://robohash.org/#{:erlang.system_time}"}
      }
    ]
  end

end
