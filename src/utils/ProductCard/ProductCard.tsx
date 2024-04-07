import React, { useRef } from "react";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/api/apiSlice";

const ProductCard = ({ data: product }) => {
  const { id, title, price, description, category, image, rating } =
    product || {};

  // modal ref ---
  const modalRef = useRef(null);

  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  // product delete function-----
  const handleDelete = () => {
    deleteProduct(product);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleUpdate = "new tittle";
    const priceUpdate = 99;
    const categoryUpdate = "new categroy";
    const descriptionUpdate = "new descripiton";
    updateProduct({
      id: id,
      title: titleUpdate,
      price: priceUpdate,
      category: categoryUpdate,
      description: descriptionUpdate,
    }).then((res) => {
      modalRef.current?.close();
    });
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="w-full h-[375px]">
        <img src={image} alt="Shoes" className="w-full h-full object-fill" />
      </figure>
      <div className="flex flex-col gap-[10px] p-[20px]">
        <h2 className="card-title">{title.slice(0, 50)}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button
            className="btn bg-red-600 hover:bg-red-400 text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="btn bg-green-600 text-white hover:bg-green-400"
            onClick={() => modalRef.current?.showModal()}
          >
            Update
          </button>
        </div>
      </div>

      {/* update modal */}

      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update the product</h3>

          <div className="modal-action">
            <form
              onSubmit={handleSubmit}
              method="dialog"
              className="w-full flex flex-col justify-center items-center gap-[10px]"
            >
              <input
                type="text"
                placeholder="Product title"
                className="input input-bordered w-full"
                defaultValue={title}
              />
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
                defaultValue={price}
              />
              <input
                type="text"
                placeholder="category"
                className="input input-bordered w-full"
                defaultValue={category}
              />
              <textarea
                placeholder="Description"
                defaultValue={description}
                className="textarea textarea-bordered textarea-lg w-full !min-h-[100px]"
              />
              <div className="flex justify-center items-center gap-[10px] w-full">
                <button
                  className="btn bg-[#24209c] text-white flex-1"
                  type="button"
                  onClick={() => modalRef.current?.close()}
                >
                  close
                </button>
                <button
                  type="submit"
                  className="btn flex-1 bg-[#3da83d] text-white"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductCard;
