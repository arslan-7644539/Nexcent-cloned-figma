import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TbLogs } from "react-icons/tb";
import { AuthContext } from "../../context/authContext";
import BackButton from "../../admin/componets/buttons/BackButton";
import Pagination from "@mui/material/Pagination";

const BlogPost = () => {
  // ----------------------
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(3);
  const totalPage = Math.ceil(items.length / rowPerPage);

  const paginateData = items.slice(
    (currentPage - 1) * rowPerPage,
    currentPage * rowPerPage
  );
  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };
  // ---------------------
  const navigate = useNavigate();
  const { blogs, blogsFetchingLoading } = useContext(AuthContext);

  useEffect(() => {
    setItems(blogs);
  }, [blogs]);

  if (blogsFetchingLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  return (
    <section className="container mx-auto min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <TbLogs className="text-5xl text-blue-500" />
            Latest Blogs
          </h2>
          <p className="text-lg text-gray-600">
            Check out our latest posts below
          </p>
        </div>

        {/* No Posts Message */}
        {paginateData.length < 1 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">
              No posts found
            </h3>
            <p className="text-gray-500 mb-4">
              It looks empty here. Add your first blog post!
            </p>
            <BackButton />
          </div>
        ) : (
          // Blog Cards Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginateData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group"
              >
                <img
                  onClick={() => navigate(`/single-post/${blog.id}`)}
                  src={blog?.image}
                  alt={blog?.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h3
                    onClick={() => navigate(`/single-post/${blog.id}`)}
                    className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition"
                  >
                    {blog?.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {blog?.description?.slice(0, 100)}...
                  </p>
                  <div className="flex justify-between text-gray-500 text-xs mt-4">
                    <span>👤 {blog.author}</span>
                    <span>
                      📅{" "}
                      {new Date(
                        blog?.createdAt?.seconds * 1000
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="w-full h-7 flex items-center justify-center">
          <Pagination
            showFirstButton // optional
            showLastButton // optional
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ mt: 8, mx: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
