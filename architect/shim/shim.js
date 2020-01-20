//code borrowed from https://www.pyimagesearch.com/2019/02/04/keras-multiple-inputs-and-mixed-data/
//their Keras' function API (bottom of page) 
//allows their feedforward, 10 input multi-layer neural network's
//consumption of mixed, pre-processed data into
//the relu function of their Machine Learning/Deep Learning
//High Level Overview:
//send their function returns to 1 of 4 shims:
//cloud POST, cloud GET, edge POST, edge GET
//the shims send the data to the API layer function
//the API layer function converts all arguments into same data types
//with same parameters
//the API layer accesses data from the NoSQL mongoDB
//the mongoDB returns the data using the same ubiquitous function call types
//the API layer returns data to client by type

//The shim layer turns function calls into
//POST, GET, DELETE, PUT for cloud and edge nodes


//path:  "/shim.js"

//******************************************************************




//get data using mixed_training.py script

// model = Sequential()
// model.add(Dense(8, input_shape=(10,), activation="relu"))
// model.add(Dense(4, activation="relu"))
// model.add(Dense(1, activation="linear"))

// inputs = Input(shape=(10,))
// x = Dense(8, activation="relu")(inputs)
// x = Dense(4, activation="relu")(x)
// x = Dense(1, activation="linear")(x)
// model = Model(inputs, x)


// # define two sets of inputs
// inputA = Input(shape=(32,))
// inputB = Input(shape=(128,))

// # the first branch operates on the first input
// x = Dense(8, activation="relu")(inputA)
// x = Dense(4, activation="relu")(x)
// x = Model(inputs=inputA, outputs=x)

// # the second branch opreates on the second input
// y = Dense(64, activation="relu")(inputB)
// y = Dense(32, activation="relu")(y)
// y = Dense(4, activation="relu")(y)
// y = Model(inputs=inputB, outputs=y)

// # combine the output of the two branches
// combined = concatenate([x.output, y.output])

// # apply a FC layer and then a regression prediction on the
// # combined outputs
// z = Dense(2, activation="relu")(combined)
// z = Dense(1, activation="linear")(z)

// # our model will accept the inputs of the two branches and
// # then output a single value
// model = Model(inputs=[x.input, y.input], outputs=z)