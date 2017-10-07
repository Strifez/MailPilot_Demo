var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Island(assetManager) {
            var _this = _super.call(this, assetManager.getResult("island")) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Island.prototype._reset = function () {
            this.y = -this.height;
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
        };
        Island.prototype._checkBounds = function () {
            if (this.y >= 480 + this.height) {
                this._reset();
            }
        };
        // PUBLIC METHODS
        Island.prototype.Start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this._reset();
        };
        Island.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        return Island;
    }(createjs.Bitmap));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map