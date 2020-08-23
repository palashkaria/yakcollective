
require 'json'

require 'date'

module Make_featured
  class Generator < Jekyll::Generator
    safe true
    priority :high #shoudl not run before we create the data, if we need to

    def generate(site)
      td=Time.now.to_i / (3600*24)
      l=site.data['members'].length()
      puts "we have ", site.data["members"].length(), " members in data.members" 
      site.data['featured']=td % l #day number from jan 1970 modulo number of actual members. alter can be fancier calculation
      site.data['build_date']=Date.today #today's date, without hours. ensures feed is daily. though feed has other feild that ensures that
    end
  end
end
