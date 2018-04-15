Code.require_file("designers_seed.ex", Path.expand("seed_data", __DIR__))

alias RealDesigners.SeedData.DesignerSeed

IO.puts "*** Seeding Database ***"

DesignerSeed.insert_seed_designers()

IO.puts "*** Database Seed Complete ***"
