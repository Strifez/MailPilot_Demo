module objects {
  export class Island extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABLES
    width:number;
    height:number;
    halfWidth:number;
    halfHeight:number;
    private _verticalSpeed:number;
    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("island"));

      this.Start();
    }
    // PRIVATE METHODS
    private _reset():void {
      this.y = -this.height;
      this.x = (Math.random() * (640-this.width))+this.halfWidth;
    }

    private _checkBounds():void {
      if(this.y >= 480 + this.height) {
        this._reset();
      }
    }

    // PUBLIC METHODS
    public Start():void {
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = 5;
      this._reset();
    }

    public Update():void {
      this.y += this._verticalSpeed;
      this._checkBounds();
    }
  }
}
