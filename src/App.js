import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollwers] = useState([]);
  console.log(data);
  useEffect(() => {
    if (loading) return;
    setFollwers(data[page]);
  }, [loading, page]);

  function handlePage(index) {
    setPage(index);
  }

  function nextPage() {
    setPage((oldPage) => {
      let newPage = oldPage + 1
      if (newPage > data.length -1) {
        newPage = 0
      } return newPage
    })
  }
  function prevPage() {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      } return prevPage
    })
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {followers.map((cap) => {
            return <Follower key={cap.id} {...cap} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              Prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
