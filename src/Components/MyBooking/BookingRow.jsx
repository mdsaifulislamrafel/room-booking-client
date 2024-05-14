import { MdOutlineCancel } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
const BookingRow = ({book}) => {
     const {customerName , img ,  email , price , date} = book; 
     console.log(book)
    return (
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {customerName }
        </td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost text-3xl"><MdOutlinePostAdd /></button>
        </th>
        <th>
          <button className="btn btn-ghost text-2xl"><GrDocumentUpdate/></button>
        </th>
        <th>
          <button className="btn btn-ghost text-3xl"><MdOutlineCancel /></button>
        </th>
      </tr>
    );
};

export default BookingRow;