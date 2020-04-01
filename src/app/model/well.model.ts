export class well {

    private name: string;
    private type: string;
    private sourceKey: string;


    constructor(name, type, sourceKey) { 
        this.name =name;
        this.type = type;
        this.sourceKey = sourceKey;
    }

    public getName(): string{
        return this.name;
    }

    public getType(): string{
        return this.type;
    }

    public getSourceKey(): string{
        return this.sourceKey;
    }

    public setSourceKey(key){
        this.sourceKey=key;
    }
}