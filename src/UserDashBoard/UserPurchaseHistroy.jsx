import React from 'react';
import UseCart from '../Hooks/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const UserPurchaseHistroy = () => {
    const [cart,refetch]=UseCart();
    const axiousSecure=UseAxiosSecure();
    const totalPrice=cart.reduce(( total,item)=>total+item.price ,0);
    const handleDelete=_id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
        
            axiousSecure.delete(`/carts/${_id}`)
            .then(res=>{
                console.log(res);
                if(res.data.deletedCount>0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }
    return (
        <div >
        <div className='flex justify-evenly'>
        <h4 className='text-4xl'> Total Items:{cart.length}  </h4>
            <h4 className='text-4xl'> Total Price:{totalPrice}   </h4>
            <button className='btn btn-primary'>Pay </button>
        </div>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
        
      <tr>

        <th>No</th>
        <th>Image</th>
        <th>Name</th>
        <th>Pricer</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index)=> <tr key={item._id}>
           <td>
            {index+1}
           </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
           {item.name}
              <br/>
             
            </td>
            <td> ${item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className='text-red-600'></FaTrashAlt> </button>
            </th>
          </tr>)
      }
     
    
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default UserPurchaseHistroy;