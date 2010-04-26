require 'rubygems'
require 'haml'
require 'sinatra'
require 'broadway'
require 'rest_client'

set :public, "public"
set :views, "views"

APPLICATION_DOMAIN = "internetenabled.org"

configure :production do
  get "/" do
    if request.env['HTTP_HOST'] != APPLICATION_DOMAIN
      redirect "http://#{APPLICATION_DOMAIN}"
    end
    if File.exists?("public/index.html")
      IO.read("public/index.html")
    else
      haml :index
    end
  end
end

configure :development do
  get "/" do
    haml :index
  end
end
