# BFF- BACKEND FOR FRONTEND
rearchitecture ML/DL data for RESTful API using translation shim layer


# shim
demo of translational shim layer for Deep Learning/ Machine Learning neural network


code borrowed from https://www.pyimagesearch.com/2019/02/04/keras-multiple-inputs-and-mixed-data/

their Keras' function API (bottom of page /shim/shim.js) 

allows their feedforward, 10 input multi-layer neural network's

consumption of mixed, pre-processed data into

the relu function of their Machine Learning/Deep Learning

##High Level Overview:
send their function returns to 1 of 4 shims:

cloud POST, cloud GET, edge POST, edge GET

the shims send the data to the API layer function

the API layer function converts all arguments into same data types

with same parameters

the API layer accesses data from the NoSQL mongoDB

the mongoDB returns the data using the same ubiquitous function call types

the API layer returns data to client by type

The shim layer turns function calls into

POST, GET, DELETE, PUT for cloud and edge nodes
