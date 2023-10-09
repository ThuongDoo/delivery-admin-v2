import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ReactPaginate from "react-paginate";

function List({ data, title, itemsPerPage = 10 }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  const sidebar = [];
  currentItems.map((item) => {
    const itemData = {
      path: `${item._id}`,
      name: `${item.name}`,
    };
    sidebar.push(itemData);
    return null;
  });

  return (
    <div className="list">
      <Sidebar title={title} navlink={sidebar} button />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
      />
    </div>
  );
}

export default List;
