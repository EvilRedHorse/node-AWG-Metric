#!/usr/bin/env Rscript

# Fedora Requires: 
# system("")

# R/awg-metric.r [AWG]
args <- commandArgs(TRUE)
awg.1 <- as.numeric(args[1])

# formula to calculate AWG diameter in mm 
diam.1 <- 0.127/( 92^( -1*( 36-awg.1 )/39 ) )

# formula to calculate AWG area in mm squared
area.1 <- (pi/4)*(diam.1^2)

catJSON <- function(){    
    cat("{\"diameter\":\"", diam.1, "\",", "\"area\":\"", area.1, "\"}", sep="",fill=TRUE)
}
catJSON()





