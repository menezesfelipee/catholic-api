module.exports = {
    connectDB: require("./connection").connectDB,
    closeDB: require("./connection").closeDB,
    saints: require("./saintsCollection"),
}