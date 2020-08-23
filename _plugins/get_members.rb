#thank you https://github.com/18F/jekyll-get
require 'json'
#require 'hash-joiner'
require 'open-uri'
require 'date'
require 'time'

module Jekyll
  class MemberGenerator < Generator
    safe true
    priority :highest

    def generate(site)
     begin
      puts "reading config"
      config = site.config['get_members']
      if !config
        return
      end
      d=config
      p d
      target = site.data[d['data']] #not really using this - i hard-coded "memebrs", for now
      f=open(d['json']).read
      #p f
      source = JSON.load(open(f))
      #p source
      for m in source do
        dt=m["date"]
        if !dt
          dt="1/1/2030"
        end
        m["date"]=Time.parse(dt)
        m["slug"] = m["name"].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
      end
      site.data[d['data']] = source 
      p site.data["members"][0]
      if site.layouts.key? 'member'
        dir="members/"
        newpage=Page.new(site,site.source,dir,"blank.html")
        site.pages << newpage #without this it uses the last page to give more content. not clear why there is this leak
        for m in site.data["members"].slice(0,3) do
          #newpage=MemberPage.new(site,site.source,dir,m["name"]+".html",m)#
          site.pages << MemberPage.new(site,site.source,dir,m["name"]+".html",m)
        #newpage=Page.new(site,site.source,dir,"blank.html")
        site.pages << newpage #without this it uses the last page to give more content. not clear why there is this leak

        end
      end
      rescue
       puts "why did i need a rescue?"
     end
    end
  end
  
  class MemberPage < Page
    def initialize(site, base, dir, nm,memberdata)

      @site = site
      @base = base
      @dir  = dir
      @name = nm 

      begin 

          self.process(@name)
          self.read_yaml(File.join(base, '_layouts'), 'member.html')


          self.data["title"]=memberdata["title"]
          self.data["cont"]=memberdata

          
          #p self.content
          #p self.type
          #self.data["layout"]=nil
      end
    end
  end

end