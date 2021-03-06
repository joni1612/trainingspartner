"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = exports.like = exports.comment = exports.update = exports.remove = void 0;
var postsService = __importStar(require("../services/posts.js"));
var create = function (req, res, next) {
    if (req.body.user !== req.user.sub)
        throw 'Not allowed';
    postsService.create(req.body)
        .then(function () { return res.status(200).json({}); })
        .catch(function (err) { return next(err); });
};
exports.create = create;
var getAll = function (req, res, next) {
    postsService.getAll()
        .then(function (posts) { return res.json(posts); })
        .catch(function (err) { return next(err); });
};
exports.getAll = getAll;
var like = function (req, res, next) {
    if (req.body.user !== req.user.sub)
        throw 'Not allowed';
    postsService.like(req.params.id, req.body)
        .then(function (posts) { return res.json(posts); })
        .catch(function (err) { return next(err); });
};
exports.like = like;
var comment = function (req, res, next) {
    if (req.body.user !== req.user.sub)
        throw 'Not allowed';
    postsService.comment(req.params.id, req.body)
        .then(function (posts) { return res.json(posts); })
        .catch(function (err) { return next(err); });
};
exports.comment = comment;
var update = function (req, res, next) {
    if (req.body.user !== req.user.sub)
        throw 'Not allowed';
    postsService.update(req.params.id, req.body)
        .then(function () { return res.status(200).json({}); })
        .catch(function (err) { return next(err); });
};
exports.update = update;
var remove = function (req, res, next) {
    //TODO check if tokenID === userID of comment
    postsService.remove(req.params.id)
        .then(function () { return res.status(200).json({}); })
        .catch(function (err) { return next(err); });
};
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9wb3N0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUVBQW9EO0FBS3BELElBQU0sTUFBTSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUMzRCxJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztRQUFFLE1BQU0sYUFBYSxDQUFBO0lBQ3RELFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztTQUN4QixJQUFJLENBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDO1NBQ3BDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUE7QUF5Q0csd0JBQU07QUF2Q1YsSUFBTSxNQUFNLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzNELFlBQVksQ0FBQyxNQUFNLEVBQUU7U0FDaEIsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLENBQUM7U0FDOUIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQTtBQWtDRyx3QkFBTTtBQWhDVixJQUFNLElBQUksR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDekQsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFBRSxNQUFNLGFBQWEsQ0FBQTtJQUN0RCxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDckMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLENBQUM7U0FDOUIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQTtBQTBCRyxvQkFBSTtBQXhCUixJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDNUQsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFBRSxNQUFNLGFBQWEsQ0FBQTtJQUN0RCxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDeEMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLENBQUM7U0FDOUIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFHLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFBO0FBQy9CLENBQUMsQ0FBQTtBQWtCRywwQkFBTztBQWhCWCxJQUFNLE1BQU0sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDM0QsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFBRSxNQUFNLGFBQWEsQ0FBQTtJQUN0RCxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDdkMsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztTQUNwQyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBO0FBVUcsd0JBQU07QUFSVixJQUFNLE1BQU0sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDM0QsNkNBQTZDO0lBQzdDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDN0IsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztTQUNwQyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBO0FBRUcsd0JBQU0ifQ==