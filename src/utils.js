const paginate = (followers) => {
  const ItemsPerpage = 20;
  const page = Math.ceil(followers.length / ItemsPerpage);
  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * ItemsPerpage;
    return followers.slice(start, start + ItemsPerpage);
  });
  return newFollowers;
};

export default paginate;
