#maier
#so here is how it works. this program reads the individual md files in the directory given to it as a single (first) parameter
#it generates an array of dictionary objects, one per file, collecting the keys as it goes by
#some keys are added/deleted/changed
#a csv file is printed. need to change avatar to include full http link, so it can be uploaded
#note links are here twice: once as a plain text single field and once as individual part fileds. one will be deprechiated
#when importing into knack, two issues: 1. Name-type fields are complex. 2. image fields need to be defined for "upload" before we actually do.
#so, first import a one liner file, to set up field names and check import
#then amend field types and settings as needed
#then add the one liner  again -as soem settinsg may need to be changed
#then add the whole file and delete teh previsouly added one liners, to avoid errors and duplications
import yaml
import os
import sys


def print_item(x):
    if not x:
        x=""
    print('"'+str(x)+'"',end=',')
path=sys.argv[1]
ls=os.listdir(path)
yamlfile=[]
keyset=set()
for l in ls:
    with open(path+"\\"+l) as f:
        #print("filename",l);
        fd=f.read()
        fd=fd.replace("---","")
        #print(fd)
        ym=yaml.load(fd)
        yamlfile.append(ym)
        #print(x)
        for key in ym:
            keyset.add(key)
            
keyset.remove("links")
keyset.add("links0: title")
keyset.add("links0: url")
keyset.add("links1: title")
keyset.add("links1: url")
keyset.add("links2: title")
keyset.add("links2: url")
keyset.add("links3: title")
keyset.add("links3: url")

keyset.remove("title")
keyset.add("title: first")
keyset.add("title: last")

keyset.add("discordID")
keyset.add("discord roles")

keyset.add("yakmap domains")
keyset.add("yakmap opt-in")

keyset.add("yak orbit")

keyset.add("about")
keyset.add("email")
keyset.add("password")

for l in yamlfile:
    if l.get("links"):
        g=l.get("links");
        for idx,val in enumerate(g):
            l["links"+str(idx)+": title"]=val["title"]
            l["links"+str(idx)+": url"]=val["url"]
    if l.get("title"):
        g=l.get("title").split(maxsplit=1)
        l["title: first"]=g[0]
        l["title: last"]=g[1]
        
#print(yamlfile)
#print(keyset)
keylist=list(keyset)

#print(", ".join(keylist))
for i in keylist:
    print_item(i)
print()
    
for l in yamlfile:
    for x in keyset: # so we can leave the old "links" intact
        print_item(l.get(x))
    print_item(l.get("links")) #to generate just the links column
    print()
