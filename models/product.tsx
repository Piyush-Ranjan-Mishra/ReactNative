class Product{
    id: String;
    ownerId: String;
    title: String;
    imageUrl: String;
    description: String;
    price: any;
    constructor(id: String,ownerId: String,title: String,imageUrl: String,description: String,price: any){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;

    }
}
export default Product;