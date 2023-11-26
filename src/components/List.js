import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ReactPaginate from "react-paginate";

function List({ data, title, itemsPerPage = 10, filter }) {
  let button = 1;
  if (filter) button = null;
  const [order, setOrder] = useState(data);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = order.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(order.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % order.length;
    setItemOffset(newOffset);
  };
  const sidebar = [];
  currentItems.map((item) => {
    const itemData = {
      path: `${item._id}`,
      name: `${item.name || item.user.name}`,
    };
    sidebar.push(itemData);
    console.log("haha");
    return null;
  });

  return (
    <div className="list">
      <Sidebar
        title={title}
        navlink={sidebar}
        button={button}
        filter={filter}
        onFilterChange={(value) => {
          if (value === "All") {
            const newOrder = data;
            setOrder(newOrder);
          } else {
            const newOrder = data.filter((item) => item.status === value);
            setOrder(newOrder);
          }
        }}
      />
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
