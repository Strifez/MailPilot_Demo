module objects {
    export abstract class GameObject extends createjs.Bitmap {
      // PRIVATE INSTANCE VARIABLES

      // PUBLIC PROPERTIES
      public width:number;
      public height:number;
      public halfWidth:number;
      public halfHeight:number;
      public verticalSpeed:number;
      public horizontalSpeed:number;
      public position:createjs.Point;
      public isColliding:boolean;
  
      // CONSTRUCTORS
      constructor(assetManager: createjs.LoadQueue, imageString: string) {
        super(assetManager.getResult(imageString));
        this.name = imageString;

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
        this.position = new createjs.Point(this.x, this.y);
        this.isColliding = false;
      }
  
      // PUBLIC ABSTRACT METHODS
      public abstract Start():void 
        
      public abstract Update():void 
        
    }
  }
  