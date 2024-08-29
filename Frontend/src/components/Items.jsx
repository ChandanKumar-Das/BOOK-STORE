const Items = ({item}) =>{
    return(
//         <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 m-6">
//   <figure><img src={item.imageLink} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {item.title}
//       <div className="badge badge-secondary">NEW</div>
//     </h2>
//     <p>{item.author}</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">{item.country}</div> 
//       <div className="badge badge-outline">{item.language}</div>
//     </div>
//   </div>
// </div>

<>
<div className="mt-4 my-3 p-3 cursor-pointer">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              {/* <div className="badge badge-secondary">{item.country}</div> */}
            </h2>
            <p>{item.titel}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline text-red-600">{item.price}</div>
              <div  className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                New
              </div>
            </div>
          </div>
        </div>
      </div>
</>
    )
}
export default Items;