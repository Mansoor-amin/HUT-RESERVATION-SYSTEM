var mongoose = require("mongoose");
var q = require("q");
var Schema = mongoose.Schema;
var hutSchema = new Schema({
    Name: { type: String, unique: true, required: true },
    PhoneNo: Number,
    Email: { type: String, unique: true, required: true },
    Description: String,
    SalesMans: Array,
    Admin: Object,
    CreatedOn: { type: Date, defalt: Date.now() },
    services: Array,
    Orders: Array
});
var hutModle = mongoose.model("companies", hutSchema);
function CreateHut(hutProps) {
    var deferred = q.defer();
    var hut = new hutModle(hutProps);
    hut.save(function (err, data) {
        if (err) {
            console.log("Error in saving Hut");
            console.log(err);
            deferred.reject("error occurred while saving Hut");
        }
        else {
            console.log("Hut Saved Successfully");
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}
exports.CreateHut = CreateHut;

function findHut(query) {
    var deferred = q.defer();
    hutModle
        .findOne(query, function (err, record) {
        if (err) {
            console.log("error in finding Hut");
            console.log(err);
            deferred.reject("Error in finding Hut");
        }
        else {
            deferred.resolve(record);
        }
    });
    return deferred.promise;
}
exports.findHut = findHut;

function updateHut(conditions, update, options) {
    var deferred = q.defer();
    hutModle.update(conditions, update, options, function (err) {
        if (err) {
            console.log("error in updating Hut");
            console.log(err);
            deferred.reject("Error in updating Hut");
        }
    });
    return deferred.promise;
}
exports.updateHut = updateHut;
