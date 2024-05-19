

const OrderCard = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className=" absolute right-0 mr-4 mt-4 p-3 bg-slate-950  text-white"> ${price} </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;