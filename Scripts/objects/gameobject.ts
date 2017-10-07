module objects {
    export class GameObject extends createjs.Bitmap {
      // PRIVATE INSTANCE VARIABLES
      public width:number;
      public height:number;
      public halfWidth:number;
      public halfHeight:number;
      public verticalSpeed:number;
      public horizontalSpeed:number;
      // PUBLIC PROPERTIES
  
      // CONSTRUCTORS
      constructor(assetManager: createjs.LoadQueue, imageString: string) {
        super(assetManager.getResult(imageString));
  
        this._initialize();
      }
      // PROTECTED METHODS
     

      // Initialize, only writen once no need to repeat for each object
      private _initialize(): void {
        this.width = this.getBounds().width;
        this.height = this.getBounds().height;
        this.halfWidth = this.width * 0.5;
        this.halfHeight = this.height * 0.5;
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
      }
  
      // PUBLIC METHODS
      public Start():void {
        this._reset();
      }
  
      public Update():void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
    }
  }
  