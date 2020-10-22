#
# Makefile for Anders-datar
#
#

#ifeq ($(shell ls -t build/ | tail -10 | wc -l), 10)

# CMESSAGE="Removing builds older than 10 days."
DATE=$(shell date +"%F")
BUILDS=$(shell ls -al build/*$(DATE)* | wc -l)

ifeq ($(BUILDS),0)
	SUFFIX=
else
	SUFFIX=-$(BUILDS)
endif

BUILDNAME=anders-datar-$(DATE)$(SUFFIX)

.PHONY: build
build :
	npm run build
	npm run generate
	tar cf build/$(BUILDNAME).tar dist/
	gzip build/$(BUILDNAME).tar


publish:
	ls -t build/ | head -1
	scp build/$(shell ls -t build/ | head -1) rpi:bygg/anders-datar.tar.gz
	ssh rpi "tar xzf bygg/anders-datar.tar.gz -C serve/"


# Bleh
clean:
	echo $(CMESSAGE)

	find ./pages -mtime +10 -type f -delete

install: build publish
