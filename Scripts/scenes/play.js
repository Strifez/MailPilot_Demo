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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Play(assetManager, currentScene) {
            var _this = _super.call(this) || this;
            _this._assetManager = assetManager;
            _this._currentScene = currentScene;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this._plane = new objects.Plane(this._assetManager);
            this._ocean = new objects.Ocean(this._assetManager);
            this._island = new objects.Island(this._assetManager);
            this._cloudNum = 3;
            this._clouds = new Array();
            this.Main();
        };
        Play.prototype.Update = function () {
            this._plane.Update();
            this._ocean.Update();
            this._island.Update();
            this._clouds.forEach(function (cloud) {
                cloud.Update();
            });
            return this._currentScene;
        };
        Play.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._plane);
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(this._assetManager);
                this.addChild(this._clouds[count]);
            }
        };
        Play.prototype._checkCollision = function () {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map