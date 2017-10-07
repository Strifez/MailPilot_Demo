module scenes {
  export class End extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _assetManager:createjs.LoadQueue;

    private _ocean: objects.Ocean;

    private _gameOverLabel:objects.Label;
    private _restartButton:objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager:createjs.LoadQueue, currentScene:number) {
      super();
      this._assetManager = assetManager;
      this._currentScene = currentScene;
      this.Start();
    }
    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start():void {
      this._ocean = new objects.Ocean(this._assetManager);
      this._gameOverLabel = new objects.Label("Game Over", "80px", "Dock51", "#FFFF00", 320, 240, true);
      this._restartButton = new objects.Button(this._assetManager, "backButton", 320, 340, true);
      this.Main();
    }

    public Update():number {
      this._ocean.Update();
      return this._currentScene;
    }

    public Main():void {

      this.addChild(this._ocean);
      this.addChild(this._gameOverLabel);
      this.addChild(this._restartButton);

      this._restartButton.on("click", () => {
        this._currentScene = config.PLAY;
        this.removeAllChildren();
      });
    }
  }
}
