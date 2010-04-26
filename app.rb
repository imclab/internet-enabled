require 'rubygems'
require 'haml'
require 'sinatra'
require 'broadway'

set :public, "public"
set :views, "views"

APPLICATION_DOMAIN = "internetenabled.org"

get "/" do
  if Sinatra::Application.environment.to_s != "development"
    if request.env['HTTP_HOST'] != APPLICATION_DOMAIN
      redirect "http://#{APPLICATION_DOMAIN}"
    end
  end
  if File.exists?("public/index.html")
    IO.read("public/index.html")
  else
    haml :index
  end
end