defmodule RealDesignersWeb.Router do
  use RealDesignersWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", RealDesignersWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api", RealDesignersWeb do
    pipe_through :api

    resources "/designers", DesignerController
  end

end
