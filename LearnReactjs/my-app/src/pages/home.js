import useGetFollowers from "../hooks/useGetFollwers";

const Home = () => {
  const { username, setUsername, followers, handleSubmit } =
    useGetFollowers();

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {/* </form> */}
      <ul>
        {followers.map((follower, i) => (
          <div key={i}>
            <img src={follower.avatar_url} alt="" width={100} />
            <li key={follower.id}>{follower.login}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
