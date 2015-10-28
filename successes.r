library(plyr)

spottings <- list.files(path="spottings")

spottings <- strsplit(spottings, "\\.")
spottings <- laply(spottings, function(x) x[1])

get_id <- function(spotting) {
  keys <- strsplit(spotting, '')[[1]]
  # Components
  keysize <- length(keys)
  major <- as.numeric(paste(keys[1:(keysize-6)], collapse=""))
  minor <- as.numeric(paste(keys[(keysize-5):(keysize-4)], collapse=""))
  magic <- as.numeric(paste(keys[(keysize-3):keysize], collapse=""))
  # Wrap things up and return
  data.frame(M = major, m = minor, k = magic)
}

ids <- adply(spottings, 1, get_id)
